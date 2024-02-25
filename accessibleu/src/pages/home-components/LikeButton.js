import React, { useState } from "react";
import "./Feed.css";
function LikeButton() {
   const [likes, setLikes] = useState(0);
   const [liked, setLiked] = useState(false);
   return (
      <button
         className={`fa-thumbs-up ${liked ? 'liked' : ''}`}
         onClick={() => {
            setLikes(likes + 1);
            setLiked(true);
         }}
      >
         {likes} Likes
      </button>
   );
}
export default LikeButton;