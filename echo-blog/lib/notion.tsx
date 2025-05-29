import { NotionAPI } from 'notion-client';
import { NotionToMarkdown } from 'notion-to-md';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';


const notion = new NotionAPI();
const n2m = new NotionToMarkdown({ notionClient: notion });

export async function getSanitizedHTML(pageId: string): Promise<string> {
  const mdBlocks = await n2m.pageToMarkdown(pageId);
  const mdObject = n2m.toMarkdownString(mdBlocks);
  const mdString = mdObject.parent;

  const dirtyHtml = await marked.parse(mdString);

  const window = new JSDOM('').window;
  const DOMPurify = createDOMPurify(window);
  const cleanHtml = DOMPurify.sanitize(dirtyHtml);

  return cleanHtml;
}

export async function getPageData(id: string){
    return await notion.getPage(id);
}