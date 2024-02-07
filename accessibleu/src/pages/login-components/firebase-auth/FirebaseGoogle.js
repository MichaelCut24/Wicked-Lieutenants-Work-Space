import { auth } from "./Firebase";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


function FirebaseGoogle(){
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, GoogleAuthProvider);
        } catch (err) {
            console.error(err);
        }
    }
    return(
        <button onClick={signInWithGoogle}><img alt="login with google" src="./Google.png"/></button>
    );
}

export default  FirebaseGoogle;