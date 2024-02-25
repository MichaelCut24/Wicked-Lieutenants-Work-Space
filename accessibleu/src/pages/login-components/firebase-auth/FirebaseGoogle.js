import { auth, googleProvider } from "./Firebase";
import { signInWithPopup } from "firebase/auth";



function FirebaseGoogle(){
   /* const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err);
        }
    }*/

    const signInWithGoogle = (e) =>{
        e.preventDefault();
        signInWithPopup(auth, googleProvider)
            .then((userCredential) => {
            console.log(userCredential)
            }).catch((error) => {
            console.log(error);
        })
    }

    return(
        <button onClick={signInWithGoogle}><img alt="login with google" src="./Google.png"/></button>
    );
}

export default  FirebaseGoogle;