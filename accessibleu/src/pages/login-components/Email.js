import { auth, googleProvider } from "../FirebaseConfig/firebase.js";
import { 
    createUserWithEmailAndPassword,
    signInWithPopup,
    signOut
} from 'firebase/auth'
import { useState } from 'react';
import './Email.css'

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(auth?.currentUser?.email); // Testing Only Inspect what user is logged in

    const signIn = async () => {
        try { 
        await createUserWithEmailAndPassword(auth, email, password)
        } catch (err) {
            console.error(err);
        }
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err);
        }
    }

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    }

    return (
    <div>
        <input 
            placeholder="Email..."
            type="text"
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            placeholder="Password..."
            type="password"
            onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signIn}>Sign In</button>
       
        <button onClick={logout}>Logout</button> 
        
        <button onClick={signInWithGoogle}><img alt="login with google" src="./Google.png"/></button>
    </div>
    );
}