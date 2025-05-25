"use client";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { log } from "console";

// const props = {
//   like: false,
//   total: 0
// }

interface LikeButtonProps {
  like: boolean;
  total: number;
}

export default function LikeButton(props: LikeButtonProps) {
  const [total, setTotal] = useState(props.total);
  const [liked, setLiked] = useState(props.like);
  return (
    <div className="pt-4 flex gap-1 justify-end">
      <div>
        {liked ? (
          <FaHeart onClick={()=>{
            setLiked(!liked)
            setTotal(total - 1)
          }} fontSize={24} className="text-red-600" />
        ) : (
          <FaRegHeart
          onClick={()=>{
            setLiked(!liked)
            setTotal(total + 1)
          }}
           fontSize={24} />
        )}
      </div>
      <span>{total}</span>
    </div>
  );
}
