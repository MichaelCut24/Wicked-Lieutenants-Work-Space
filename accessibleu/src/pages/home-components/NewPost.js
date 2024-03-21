import { addDoc, collection, onSnapshot, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../login-components/firebase-auth/Firebase";
import "./NewPost.css"


export default function NewPost() {
  const [posts, setPosts] = useState([]); // array to hold posts
  const [username, setUsername] = useState("");
  const [contents, setContents] = useState("");
  const [title, setTitle] = useState("");

  useEffect (
    () => 
      onSnapshot(collection(db, "posts"),(snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );

  const handleNew = async (e) => {
    e.preventDefault();
    try{
      const postdate = serverTimestamp();
      const likes = 0;
      const collectionRef = collection(db, "posts");
      const username = "still needs to be connected  to user login info!!!";
      const payload = {username, contents, postdate, title, likes};
  
      await addDoc(collectionRef, payload);
      setTitle("");
      setContents("");
    } catch (error){
      console.error("Error adding document: ", error);
    }  
  }

  return(
    <div className="new-post-container">   
      <p>Create a Post</p>
      <div className="new-post-form-container">
        <form onSubmit={handleNew}>
          <input  id="post-title" 
                  type="text" 
                  placeholder="Title" 
                  required
                  value = {title}
                  onChange= {(e)=> setTitle(e.target.value)}
          />
          <input  id="post-content" 
                  type="text" 
                  placeholder="Content" 
                  required
                  value = {contents}
                  onChange= {(e)=> setContents(e.target.value)}
          />        
          <center className="border border-1 border-black">
            <button type="submit">Post</button>
          </center>
        </form>
      </div>
    </div>
  );
}