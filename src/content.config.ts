import { rssSchema } from "@astrojs/rss";
import { glob } from "astro/loaders";
import { defineCollection, } from "astro:content";

const digest = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/digest" }),
    schema: rssSchema
})

export const collections = { digest }


