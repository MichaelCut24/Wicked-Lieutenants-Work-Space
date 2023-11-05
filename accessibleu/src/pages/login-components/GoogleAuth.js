import {React, useState, useEffect} from 'react';
import { googleLogout, useGoogleLogin} from '@react-oauth/google';
import axios from 'axios';

import "../styling/GoogleAuth.css"

const GoogleAuth = () => {
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect( 
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [user]
    );
    
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    return (
        <>
            {profile ? (  
                <div className='user-info'>
                    <img src={profile.picture} alt="user image" />
                    <p>{profile.name}</p>
                    <p>{profile.email}</p>
                    <button onClick={logOut}>Log out</button>
                </div>  
            ) : (
                <div className='user-info'>
                    <p>Not signed in</p>
                </div>
            )}
                <div className="google-button">
                    <button onClick={() => login()}><img alt="login with google" src="./Google.png"/></button>
                </div>  
        </>  
  );
}

export default GoogleAuth;