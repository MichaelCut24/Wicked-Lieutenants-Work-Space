import React from 'react';
import { db } from './Firebase';
import './Crud.css'
import { doc, collection, updateDoc, getDocs} from 'firebase/firestore';
import { useState, useEffect } from "react";


const Crud = () => {
    const[FirstName, setFirstName] = useState()
    const[fetchData, setFetchData] = useState([])
    const id = useState()
    
    // The Database ref
    const dbref = collection(db, "Users")


    // Fetching the data from Database
    fetch = async () =>
    {
        const snapshot = await getDocs(dbref)
        const fetchdata = snapshot.docs.map((doc => ({id: doc.id, ...doc.data()})))
        setFetchData(fetchdata)
        console.log(fetchData)
    }
    
    useEffect(() =>{
        fetch()
    },[])

    //update the data
    const update = async () => 
    {
        const updateref = doc(dbref, id)
        try{
            const updatedata = await updateDoc(updateref, {firstName: FirstName})
             alert("Update Successfully")
            window.location.reload()

        } catch (error){
            alert(error, "Update Error Occured")
        }  
    } 

    return (
        <>
        <div className='form_container'>
            <h2>Update Form</h2>
                <div className='box'>
                    <input type='text' placeholder='First Name' value={FirstName} onChange={(e) => setFirstName(e.target.value)}></input>
                </div>
                <button onClick={update}>Update</button>
        </div>
        </>
    )
}

export default Crud;