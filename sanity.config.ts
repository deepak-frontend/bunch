import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { sanityEnv } from "@/sanity/env";
import { schemaTypes } from "@/sanity/schemas";
import { leadStatuses } from "@/sanity/schemas/lead";

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
            S.listItem()
              .title("Leads")
              .id("leads")
              .child(
                S.list()
                  .title("Leads")
                  .items([
                    S.listItem()
                      .title("All leads")
                      .id("allLeads")
                      .child(
                        S.documentList()
                          .title("All leads")
                          .schemaType("lead")
                          .filter('_type == "lead"')
                          .defaultOrdering([{ field: "submittedAt", direction: "desc" }]),
                      ),
                    S.divider(),
                    ...leadStatuses.map((status) =>
                      S.listItem()
                        .title(status.title)
                        .id(`leads-${status.value}`)
                        .child(
                          S.documentList()
                            .title(`${status.title} leads`)
                            .schemaType("lead")
                            .filter('_type == "lead" && coalesce(status, "new") == $status')
                            .params({ status: status.value })
                            .defaultOrdering([{ field: "submittedAt", direction: "desc" }]),
                        ),
                    ),
                  ]),
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) => !["siteSettings", "homePage", "lead"].includes(item.getId() ?? ""),
            ),
          ]),
    }),
  ],
  schema: { types: schemaTypes },
});
