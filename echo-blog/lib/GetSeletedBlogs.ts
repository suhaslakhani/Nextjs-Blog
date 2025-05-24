import { title } from "process";
import Parser from "rss-parser";

const parser = new Parser();

const selectedLinks = [
    "https://www.elian.codes/blog/21-02-03-building-website-in-nuxt/",
    "https://www.elian.codes/blog/21-02-09-adding-dark-mode-tailwind/",
    "https://www.elian.codes/blog/21-02-12-using-valet-for-local-development/",
    "https://www.elian.codes/blog/21-02-16-using-tailwind-with-sass-preprocessor/",

]

export async function ExternalPosts(){
    const feed = await parser.parseURL("https://www.elian.codes/blog.xml");

    const filtered = feed.items.filter(item => selectedLinks.includes(item.links ?? "") );

    return filtered.map(item =>({
        title : item.title,
        description : item.contentSnippet,
        date : item.pubDate,
    }));
}