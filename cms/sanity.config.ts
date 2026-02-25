import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! || process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET! || process.env.SANITY_STUDIO_DATASET;

if (!projectId || !dataset) {
  throw new Error(
    "Missing Sanity configuration. Check your .env.local or Vercel Environment Variables."
  );
}

export default defineConfig({
  name: 'default',
  title: 'RHC-FeedEdu',

  projectId: projectId,
  dataset: dataset,
  apiVersion: '2024-01-01',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
