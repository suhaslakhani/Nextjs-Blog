"use client";

import { useState } from "react";
import {BiLike, BiSolidLike} from "react-icons/bi";
export default function LikeButton() {
  
    const [isLiked, setIsLiked] = useState(false)
    const [likes, setLikes] = useState(0);

  return (
    <div className="flex flex-row justify-center items-center gap-1">
        {
            isLiked &&  <BiSolidLike onClick={() => {
                setLikes(likes - 1)
                setIsLiked(false)
            }} className="ri-heart-line" />
        }
        {
            !isLiked && <BiLike onClick={() => {
            setLikes(likes + 1);
            setIsLiked(true)
        }} className="ri-heart-line" />
        }
        <span>{likes}</span>
        
    </div>
  );
}
