import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./Firebase";

function LoginState() {
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
    }
    
    
    return(
        <div className="login-state-container">
            {authUser ? 
                <div className="flex gap-3">
                    <p>Signed In as {authUser.email}{authUser.UserUID}</p>
                    <button onClick={userSignOut}>Sign Out</button>
                </div> 
            : 
                <div>
                    <p>Signed Out</p>
                </div>
            }
        </div>
    );
}


export default LoginState;