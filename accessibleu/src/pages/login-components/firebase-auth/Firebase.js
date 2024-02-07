import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBG0t-JR6Yiq8zVqevt3oljxqcrfQn4alU",
    authDomain: "accessibleu-75c4b.firebaseapp.com",
    projectId: "accessibleu-75c4b",
    storageBucket: "accessibleu-75c4b.appspot.com",
    messagingSenderId: "1053407513098",
    appId: "1:1053407513098:web:b855b78a4f1bb222c1edf3",
    measurementId: "G-ZGV77FG6Y6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);