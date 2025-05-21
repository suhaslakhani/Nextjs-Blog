import { posts } from "@/data/post"
import { notFound } from "next/navigation"

type Props = {
    params:{
        slug: string;
    };
};

export default function BlogPostPage({ params }:Props){
    const post = posts.find((p) => p.slug === params.slug);

    if(!post) return notFound();

    return (
        <main>
            <section>
                <div className="max-w-3xl mx-auto p-6">
                    <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                    <p className="text-gray-600 italic mb-6">{post.description}</p>
                    <article className="prose prose-lg text-gray-800 whitespace-pre-line">
                        {post.content}
                    </article>
                </div>
            </section>
        </main>
    )
}