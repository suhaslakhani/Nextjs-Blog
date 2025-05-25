'use client'

import { useState } from "react"

export default function LikeButton(){
    const [liked,setliked] = useState(false)
    return(
        <div className="pt-4">
            <button onClick={() => setliked(!liked)}>{liked ? 'liked' : 'notliked'}</button>
        </div>    
)
}