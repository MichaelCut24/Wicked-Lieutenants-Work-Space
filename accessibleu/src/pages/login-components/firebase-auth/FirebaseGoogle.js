import { auth, db, googleProvider } from "./Firebase";
import { signInWithPopup } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";



function FirebaseGoogle(){
    //const [email, setEmail] = useState('');

    const signInWithGoogle = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithPopup(auth, googleProvider);
            console.log(userCredential);
            
            // Assuming you have a user object with an email property
            const user = userCredential.user;
            const userDoc = {
                email: user.email, // Get the email from the user object
                // Add other properties if needed
            };
            
            await docRef(userDoc); // Pass the user document to docRef
        } catch (error) {
            console.log(error);
        }
    };

    const docRef = async (userDoc) => {
        try {
          await addDoc(collection(db, "Users"), userDoc);
          console.log("Document written with ID: ", docRef.id);
        } catch (error) {
          console.error("Error adding document: ", error);
        }
      };
      

    return(
        <button onClick={signInWithGoogle}><img alt="login with google" src="./Google.png"/></button>
    );
}

export default  FirebaseGoogle;