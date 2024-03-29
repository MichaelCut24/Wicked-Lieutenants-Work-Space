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
        <div>
            {authUser ? 
                <>
                    <p>Signed In as {authUser.email}{authUser.UserUID}</p>
                    <p>
                        <button onClick={userSignOut}>Sign Out</button>
                    </p>
                </> 
            : 
                <>
                    <p>Signed Out</p>
                </>
            }
        </div>
    );
}


export default LoginState;