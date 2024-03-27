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
                <div className="post-username">
                  <p>from {post.username}</p>
                  
                </div>
                <div className="post-title">
                  <p>{post.title}</p>
                </div>
                <div className="post-content">
                  <p>{post.contents}</p>
                </div>
    
                <div className="likes-comments-shares">
                  <div className="likes"> 
                    {post.likes}
                    <img className="post-icon" src="/likeicon.png" alt="likes"/>
                  </div>

                  <div className="comments">
                    <img className="post-icon" src="/commenticon.png" alt="likes"/>
                  </div>
                  
                  <div className="shares">
                    <img className="post-icon" src="/shareicon.png" alt="likes"/>
                  </div>
                </div>  
              </div>
            ))}
        </div>
      );
}

