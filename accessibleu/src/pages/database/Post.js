import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../login-components/firebase-auth/Firebase";
import "./Post.css"


export default function Post() {
  const [posts, setPosts] = useState([]); // array to hold posts

  useEffect (
    () => 
      onSnapshot(collection(db, "posts"),(snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );
  return(
    <div>   
        {posts.map((post) => (
          <div className="border border-1 border-black">
             
            <div className="border border-1 border-black">
              <p>{post.username}</p>
            </div>
            <div className="border border-1 border-black">
              <p>{post.contents}</p>
            </div>

            <div className="flex border border-1 border-black">
              <div className="border border-1 border-black"> Likes</div>
              <div className="border border-1 border-black"> Comments</div>
              <div className="border border-1 border-black"> Share</div>
            </div>
            
          </div>
        ))}

    </div>
  );
}