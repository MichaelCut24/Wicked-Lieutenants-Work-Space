import "./Feed.css";

import { collection, onSnapshot} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../login-components/firebase-auth/Firebase";

export default function Feed() {
      const [posts, setPosts] = useState([]); // array to hold posts

      useEffect (
        () => 
          onSnapshot(collection(db, "posts"),(snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
          ),
        []
      );
    
      return(
        <div className="feed-container">   
            {posts.map((post) => (
              <div className="post-container">
                <div>
                  <p>Username: {post.username}</p>
                </div>
                <div>
                  <p>Title: {post.title}</p>
                </div>
                <div>
                  <p>Content: {post.contents}</p>
                </div>
    
                <div className="flex gap-1">
                  <div className="border border-1 border-black"> {post.likes} Likes</div>
                  <div className="border border-1 border-black"> Comments</div>
                  <div className="border border-1 border-black"> Share</div>
                </div>  
              </div>
            ))}
        </div>
      );
}

