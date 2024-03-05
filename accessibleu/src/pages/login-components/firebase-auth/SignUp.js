import { auth, db } from "./Firebase";
import { useState } from "react"; 
import { 
    createUserWithEmailAndPassword,
    sendEmailVerification } from "firebase/auth"; 
import { collection, addDoc } from "firebase/firestore";


function SignUpForm() {
  const [email, setEmail] = useState(""); // Setting up state for email input field
  const [password, setPassword] = useState(""); // Setting up state for password input field
  const [firstName, setfirstName] = useState(""); // Setting up state for first name input field
  const [lastName, setlastName] = useState(""); // Setting up state for last name input field
  const [userName, setuserName] = useState(""); // Setting up state for username input field

  const SignUp = async (e) => { // Function to handle the sign up process
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password). // Create a new user using the email and password provided
      then(async (userCredential) => {
        console.log(userCredential);

        await docRef(); // Once the user is created, add the user document to the 'Users' collection in the firestore

        await sendEmailVerification(auth.currentUser) // Send email verification
        .then(() => {
          // Email verification sent!
          // ...
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const docRef = async () => { // Function to add the user document to the 'Users' collection in the firestore
    const docRef = await addDoc(collection(db, "Users"), { // Add a new document with the provided email and password
      userName,
      firstName,
      lastName,
      email,
      password
    });
    console.log("Document written with ID: ", docRef.id);
  };
  


  return (
    <form onSubmit={SignUp}>
        <input // Username input field
        type="text"
        placeholder="Enter your Username"
        id="user-userName"
        onChange={(e) => setuserName(e.target.value)}
        required
      />
      <input // First name input field
        type="text"
        placeholder="Enter your First Name"
        id="user-firstName"
        onChange={(e) => setfirstName(e.target.value)}
        required
      />
      <input // Last name input field
        type="text"
        placeholder="Enter your Last Name"
        id="user-lastName"
        onChange={(e) => setlastName(e.target.value)}
        required
      />
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
        <button 
        type="submit"
        className= "popup-create"
        id="popup-create"
        >Create</button>
      </center>
    </form>
  );
}

export default SignUpForm;