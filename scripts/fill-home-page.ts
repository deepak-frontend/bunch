import { createClient } from "next-sanity";
import { homeDefaults } from "@/content/site/home";
import { sanityEnv } from "@/sanity/env";

// Fills any Home page field that is still empty in Sanity with the live-site
// copy, so every section shows its current text in Studio. Fields an editor
// has already filled in are never changed.

// Sanity needs a unique _key on every object inside an array.
function withKeys(value: unknown, path = "k"): unknown {
  if (Array.isArray(value)) {
    return value.map((item, index) =>
      item && typeof item === "object"
        ? { _key: `${path}${index}`, ...(withKeys(item, `${path}${index}`) as object) }
        : item,
    );
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, withKeys(item, `${path}${key.slice(0, 3)}`)]),
    );
  }
  return value;
}

async function main() {
  const token = process.env.SANITY_API_WRITE_TOKEN;
  if (!sanityEnv.projectId || !token) {
    throw new Error(
      "Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN in .env.local first.",
    );
  }

  const client = createClient({
    projectId: sanityEnv.projectId,
    dataset: sanityEnv.dataset,
    apiVersion: sanityEnv.apiVersion,
    useCdn: false,
    token,
  });
  const defaults = withKeys(homeDefaults) as Record<string, unknown>;
  const ids = ["homePage", "drafts.homePage"];
  const existing = await client.fetch<{ _id: string }[]>(`*[_id in $ids]{_id}`, { ids });

  if (!existing.length) {
    await client.create({ _id: "homePage", _type: "homePage", ...defaults });
    console.info("Created the Home page document.");
    return;
  }

  for (const { _id } of existing) {
    const current = await client.getDocument<Record<string, unknown>>(_id);
    const missing = Object.fromEntries(
      Object.entries(defaults).filter(([key]) => {
        const value = current?.[key];
        return value === undefined || (Array.isArray(value) && value.length === 0);
      }),
    );
    // The tax note is now part of the two price notes.
    await client.patch(_id).set(missing).unset(["taxDisclaimer"]).commit();
    console.info(`${_id}: filled ${Object.keys(missing).length} empty fields.`);
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : "Filling the Home page failed.");
  process.exitCode = 1;
});
