import { getPageData } from "@/lib/notion";
import { getSanitizedHTML } from "@/lib/notion";

import { NotionRenderer } from "react-notion-x";

export default async function BlogPage({ params }: { params: { id: string } }) {
  const recordMap = await getPageData(params.id);
  const html = await getSanitizedHTML(params.id);

  return (
    <main>
      <NotionRenderer recordMap={recordMap} fullPage={true} />
      <article className="prose mx-auto p-6">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </main>
  );
}
