import React from 'react';
import { db } from './Firebase';
import './UserInfo.css'
import {collection, getDoc} from 'firebase/firestore';
import { useState, useEffect } from "react";

function UserInfo () {
    const[fetchData, setFetchData] = useState([])
    const firstName = useState("");

    const dbref = async () => { // Function to collect the user document from the 'Users' collection in the firestore
        const dbref = await getDoc(collection(db, "Users"), {
          firstName
        });
        console.log("Document written with ID: ", dbref.id);
      };


    // Fetching the data from Database
    fetch = async () =>
    {
        const snapshot = await getDoc(dbref)
        const fetchdata = snapshot.docs.map((doc => ({id: doc.id, ...doc.data()})))
        setFetchData(fetchdata)
        console.log(fetchData)
    }
    
    useEffect(() =>{
        fetch()
    },[])

    return (
        <>
        <div className='UserDataBase'>
            <h2>FireStore Database</h2>
            <div className='UserInfoDisplay'>
                {
                    fetchData.map((data) =>
                    {
                        return(
                            <>
                            <div className='box'>
                            <h3>Name: {data.firstName}</h3>
                            </div>
                            </>
                        )
                    })
                }
                
            </div>
        </div>
        </>
    )
}

export default UserInfo;


// Using Dannys version to call the data from Firestore
/*
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
*/