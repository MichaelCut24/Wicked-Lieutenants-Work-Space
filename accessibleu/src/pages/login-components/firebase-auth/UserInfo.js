import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./Firebase";
import "./UserInfo.css"


export default function UserInfo() {
  const [userInfo, setUserInfo] = useState([]); // array to hold posts

  useEffect (
    () => 
      onSnapshot(collection(db, "Users"),(snapshot) =>
        setUserInfo(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );
  
  return(
    <div>   
        {userInfo.map((user) => (
          <div className="border border-1 border-black">
             
            <div className="border border-1 border-black">
              <p>{user.firstName}</p>
            </div>
            <div className="border border-1 border-black">
              <p>{user.email}</p>
            </div> 
          </div>
        ))}

    </div>
  );
}
