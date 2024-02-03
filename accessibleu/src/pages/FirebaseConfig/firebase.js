// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics"; ***Not needed at the moment

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// const analytics = getAnalytics(app); ***Not needed at the moment