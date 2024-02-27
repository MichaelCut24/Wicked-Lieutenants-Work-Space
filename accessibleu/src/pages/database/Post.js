import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../login-components/firebase-auth/Firebase";


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
      <ul>
        {posts.map((post) => (
          <li>
            <p>username: {post.username}</p>
            <p>content: {post.contents}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}