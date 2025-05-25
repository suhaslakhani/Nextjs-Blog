import Image from "next/image";
import { posts, Post } from "@/data/post";
import LikeButton from "./components/like-button";

export default function Page() {
  return (
    <main>
      <section>
        <div className="max-w-7x mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>
          <div className="grid grid-cols-3 gap-6">
            {posts.map((post: Post) => (
              <div
                key={post.id}
                className="border-[1px] rounded shadow-lg shadow-gray-400 p-4"
              >
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <Image src={post.image} alt="Image" width={800} height={0} />
                <p className="text-gray-600 mt-1">{post.description}</p>
                <a
                  href={`/blogs/${post.slug}`}
                  className="text-blue-600 mt-2 inline-block"
                >
                  Read more →
                </a>
                <div className="flex flex-row items-center justify-between mt-4">
                  <div className="mr-2">
                    <LikeButton />
                  </div>

                  {post.tags && (
                    <div className="flex flex-row justify-center items-center gap-2">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="text-sm text-gray-500">
                    {" "}
                    Created at
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
