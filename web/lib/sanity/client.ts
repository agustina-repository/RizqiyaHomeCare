import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_READ_TOKEN;

if (!token) {
  console.warn("⚠️ PERINGATAN: SANITY_API_READ_TOKEN tidak ditemukan di .env!");
}

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: "2023-01-01",
  useCdn: false,
  token: token,
  perspective: "published",
});

export const writeClient = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: "2023-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
