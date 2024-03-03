import { auth, db } from "./Firebase";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";


function SignUpForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const SignUp = async (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            console.log(userCredential)
            }).catch((error) => {
            console.log(error);
        })
    }

    // adds data to firestore
    const docRef = async () => {
            await addDoc(collection(db, "Users"), {
            email,
            password
          });
          console.log("Document written with ID: ", docRef.id);
    } 

    return(
        <form onSubmit={SignUp}>
            <input 
                type="text" 
                placeholder="Enter your school email" 
                id="user-email" 
                onChange={(e)=> setEmail(e.target.value)}
                required
            />
            <input 
                type="password" 
                placeholder="Password" 
                id="user-password" 
                onChange={(e)=> setPassword(e.target.value)}
                required
            />
            <center>
                <button type="submit">Create</button>
            </center>
        </form>
    );
}

export default SignUpForm;