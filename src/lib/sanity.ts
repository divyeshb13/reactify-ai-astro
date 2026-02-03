import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: import.meta.env.PROJECT_ID,
  dataset: import.meta.env.DATASET,
  apiVersion: import.meta.env.API_VERSION,
  useCdn: false,
  token: import.meta.env.SANITY_TOKEN,
});
