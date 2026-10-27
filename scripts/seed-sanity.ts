import { readFile } from "node:fs/promises";
import { createClient } from "next-sanity";
import { sanityEnv } from "@/sanity/env";

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
  const content = await readFile(
    new URL("../sanity/starter-content.ndjson", import.meta.url),
    "utf8",
  );
  const documents = content
    .split(/\r?\n/)
    .filter(Boolean)
    .map(
      (line) =>
        JSON.parse(line) as Parameters<typeof client.createIfNotExists>[0],
    );

  for (const document of documents) {
    await client.createIfNotExists(document);
  }

  console.info(`Created or preserved ${documents.length} starter content documents.`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : "Sanity seed failed.");
  process.exitCode = 1;
});
