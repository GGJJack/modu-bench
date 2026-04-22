import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const domain = z.enum(['llm', 'image-gen', 'tts', 'stt', 'multimodal']);
const status = z.enum(['draft', 'published']);

const models = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/models' }),
  schema: z.object({
    modelId: z.string(),
    domain,
    status,
    updated: z.date(),
    sources: z.array(z.string().url()).min(1),
    features: z
      .object({
        toolUse: z.boolean().optional(),
        vision: z.boolean().optional(),
        audioInput: z.boolean().optional(),
        audioOutput: z.boolean().optional(),
        realtime: z.boolean().optional(),
        extendedThinking: z.boolean().optional(),
        computerUse: z.boolean().optional(),
        fineTuning: z.boolean().optional(),
      })
      .optional(),
    highlights: z.array(z.string()).optional(),
    relatedOrganization: z.string().optional(),
  }),
});

const benchmarks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/benchmarks' }),
  schema: z.object({
    benchmarkId: z.string(),
    domain,
    status,
    updated: z.date(),
    sources: z.array(z.string().url()).min(1),
    organization: z.string().optional(),
    paperUrl: z.string().url().optional(),
    highlights: z.array(z.string()).optional(),
  }),
});

const organizations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/organizations' }),
  schema: z.object({
    orgId: z.string(),
    name: z.string(),
    type: z.enum(['private', 'nonprofit', 'academic', 'government', 'community']).optional(),
    founded: z.string().optional(),
    headquarters: z.string().optional(),
    website: z.string().url().optional(),
    status,
    updated: z.date(),
    sources: z.array(z.string().url()).min(1),
    affiliations: z.array(z.string()).optional(),
  }),
});

export const collections = { models, benchmarks, organizations };
