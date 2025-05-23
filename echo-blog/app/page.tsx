import Link from "next/link"
import Image from "next/image"
import { posts, Post } from "@/data/post"
export default function Page(){
    return(
        <main>
            <section>
                <div className="max-w-7x mx-auto p-6">
                    <h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>
                    <div className="grid grid-cols-3 gap-6">
                        {posts.map((post: Post) => (
                            <div key={post.id} className="border-[1px] rounded shadow-lg shadow-gray-400 p-4">
                                <h2 className="text-xl font-semibold">{post.title}</h2>
                                <Image src={post.image} alt="Image" width={800} height={0}/>
                                <p className="text-gray-600 mt-1">{post.description}</p>
                                <a href={`/blogs/${post.slug}`} className="text-blue-600 mt-2 inline-block">Read more →</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}