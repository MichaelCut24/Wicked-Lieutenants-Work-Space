import {React, useState, useEffect} from 'react';
import { googleLogout, useGoogleLogin} from '@react-oauth/google';
import axios from 'axios';

import "../styling/GoogleAuth.css"


const LoginForm = () => {
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
        [ user ]
    );

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    return (
        <>
            {profile ? (    
                <div className='google-container'>
                    <div className='user-info'>
                        <img src={profile.picture} alt="user image" />
                        <p>Name: {profile.name}</p>
                        <p>Email Address: {profile.email}</p>
                        <button onClick={logOut}>Log out</button>
                    </div>
                    <button onClick={() => login()}><img alt="login with google" src="./Google.png"/></button>
                </div>
            ) : (
                <div className='google-container'>
                    <button onClick={() => login()}><img alt="login with google" src="./Google.png"/></button>
                </div>
            )}
        </>  
  );
}

export default LoginForm;