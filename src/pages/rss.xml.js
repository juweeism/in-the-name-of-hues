import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const digest = await getCollection('digest')

    return rss({
        title: 'in the name of hues',
        description: 'A weekly digest on design, engineering, and everything in between maintained by Juwee @juweeism',
        site: context.site,
        items: digest.map((d) => ({
            title: d.data.title,
            pubDate: d.data.date,
            tags: d.data.tags,
            content: d.body
        })),
        customData: `<language>en-us</language>`,
    });
}
