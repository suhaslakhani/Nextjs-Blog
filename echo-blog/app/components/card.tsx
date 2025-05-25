'use client'
import { useState } from "react";
import { Post } from "@/data/post";
import Image from "next/image";
import LikeButton from "./likebutton";

// const props = {
//   like: false,
//   total: 0
// }

interface CardProps {
  post: Post;
}

export default function PostCard(props: CardProps) {
  // const [post, _] = useState(props.post);
 const post = props.post
  return (
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
      <div className="flex items-center justify-between">
        {post.tags && (
          <div className="mt-3 flex flex-wrap gap-2">
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
        <p className="text-sm text-gray-500 pt-3">
          {" "}
          Created at
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
      <div>
        <LikeButton total={post.total} like={post.like} />
        {/* <i onClick={handleClick} className="ri-heart-line"></i> */}
      </div>
    </div>
  );
}
