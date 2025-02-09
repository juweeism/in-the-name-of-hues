import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
    const digest = await getCollection('digest')

    return rss({
        title: 'in the name of hues',
        description: 'A weekly digest on design, engineering, and everything in between maintained by Juwee @juweeism',
        site: context.site,
        items: digest.map((d) => ({
            title: d.data.title,
            pubDate: d.data.pubDate,
            tags: d.data.tags,
            content: sanitizeHtml(parser.render(d.body), {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
            }),
        })),
        customData: `<language>en-us</language>`,
    });
}
