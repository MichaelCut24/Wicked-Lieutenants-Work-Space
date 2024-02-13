import { auth } from "./Firebase";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";


function SignInForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const SignIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            console.log(userCredential)
            }).catch((error) => {
            console.log(error);
        })
    }

    return(
        <form onSubmit={SignIn}>
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
                <button type="submit">Login</button>
            </center>
        </form>
    );
}

export default SignInForm;