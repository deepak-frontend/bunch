import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { sanityEnv } from "@/sanity/env";
import { schemaTypes } from "@/sanity/schemas";

export default defineConfig({
  name: "default",
  title: "Bunch CMS",
  projectId: sanityEnv.projectId || "placeholder",
  dataset: sanityEnv.dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Bunch content")
          .items([
            S.listItem()
              .title("Site settings")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings"),
              ),
            S.listItem()
              .title("Home page")
              .id("homePage")
              .child(
                S.document().schemaType("homePage").documentId("homePage"),
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) => !["siteSettings", "homePage"].includes(item.getId() ?? ""),
            ),
          ]),
    }),
  ],
  schema: { types: schemaTypes },
});
