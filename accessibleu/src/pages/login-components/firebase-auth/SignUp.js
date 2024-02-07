import { auth } from "./Firebase";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";


function SignUpForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const SignUp = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            console.log(userCredential)
            }).catch((error) => {
            console.log(error);
        })
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