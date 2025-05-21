import Link from "next/link"
import { posts, Post } from "@/data/post"
export default function Page(){
    return(
        <main>
            {/* here are the list of blogs which will display on the home page */}
            <section>
                <div className="max-w-3xl mx-auto p-6">
                    <h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>
                    <div className="space-y-6">
                        {posts.map((post: Post) => (
                            <div key={post.id} className="border-b pb-4">
                                <h2 className="text-xl font-semibold">{post.title}</h2>
                                <p className="text-gray-600 mt-1">{post.description}</p>
                                <a href={`/post/${post.slug}`} className="text-blue-600 mt-2 inline-block">Read more →</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}