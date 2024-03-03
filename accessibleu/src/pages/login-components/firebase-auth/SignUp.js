import { auth, db } from "./Firebase";
import { useState } from "react"; 
import { createUserWithEmailAndPassword } from "firebase/auth"; 
import { collection, addDoc } from "firebase/firestore";

function SignUpForm() {
  const [email, setEmail] = useState(""); // Setting up state for email input field
  const [password, setPassword] = useState(""); // Setting up state for password input field

  const SignUp = async (e) => { // Function to handle the sign up process
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password). // Create a new user using the email and password provided
      then(async (userCredential) => {
        console.log(userCredential);
        await docRef(); // Once the user is created, add the user document to the 'Users' collection in the firestore
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const docRef = async () => { // Function to add the user document to the 'Users' collection in the firestore
    const docRef = await addDoc(collection(db, "Users"), { // Add a new document with the provided email and password
      email,
      password
    });
    console.log("Document written with ID: ", docRef.id);
  };

  return (
    <form onSubmit={SignUp}>
      <input // Email input field
        type="text"
        placeholder="Enter your school email"
        id="user-email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input // Password input field
        type="password"
        placeholder="Password"
        id="user-password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <center>
        <button type="submit">Create</button>
      </center>
    </form>
  );
}

export default SignUpForm;