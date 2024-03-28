import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState} from "react";
import { auth } from "./Firebase";
import { Link } from "react-router-dom";


export default function LoginState() {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
            return () => {
                listen();
            }
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('sign out successful')
        }).catch(error => console.log(error))
    };


    return(
        <div className="login-state-container">
            {authUser ? 
                <div className="flex gap-2">
                    <p>Signed In as {authUser.email}</p>
                    <button onClick={userSignOut}>Sign Out</button>
                </div> 
            : 
                <div className="mr-10">
                    <Link to="/login">
                        <button>Sign In</button>
                    </Link>
                </div>
            }
        </div>
    );
    
}

// Function to check if a user is logged in
export const isUserLoggedIn = () => {
    const auth = getAuth();
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            unsubscribe(); // Unsubscribe after the first invocation
            
            if (user) {
                resolve(true); // User is logged in
            } else {
                resolve(false); // No user is logged in
            }
        }, reject);
    });
};