import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const digest = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/digest" }),
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        date: z.date()
    })
})

export const collections = { digest }


