import { posts, Post } from "@/data/post";
import PostCard from "./components/card";



export default function Page() {
  return (
    <main>
      <section>
        <div className="max-w-7x mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>
          <div className="grid grid-cols-3 gap-6">
            {posts.map((post: Post) => (
              <PostCard post={post} key={post.id} /> 
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
