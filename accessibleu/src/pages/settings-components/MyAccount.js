import { useEffect, useState } from 'react';
import { isUserLoggedIn } from '../login-components/firebase-auth/LoginState.js';
import { db } from '../login-components/firebase-auth/Firebase.js';

import './MyAccount.css';

function Settings (){
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect hook to execute logic when the component mounts
  useEffect(() => {
    // Call the isUserLoggedIn function to check if a user is logged in
    isUserLoggedIn()
        .then(isLoggedIn => {
            // Update the isLoggedIn state based on the result
            setIsLoggedIn(isLoggedIn);
        })
        .catch(error => {
            // Handle any errors that occur during the authentication check
            console.error("Error checking user authentication:", error);
        });
  }, []); // Empty dependency array ensures this effect runs only once, on mount

  return (
    <div>
        {isLoggedIn ? (
        <div class="formBox">
          <div class="formHeading">My Account</div>
          <div class="editButton">Edit</div>
          <div class="boxHeading"></div>
          <div class="container">
            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Enter your username"></input>

                <label for="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" placeholder="Enter your first name"></input>

                <label for="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" placeholder="Enter your last name"></input>

                <label for="email">Email Address:</label>
                <input type="email" id="email" name="email" placeholder="contact@accessibleu.com"></input>
            </form>

            <div class="infoContainer">Two-Factor Authentication adds an extra layer of Security
                to your account, ensuring that only you have the rights to login.</div>
            <div class="button-2fa">Enable 2FA</div>
          </div>
        </div>
        ) : (
            <div class="formBox">
              <p>No user is logged in</p>
            </div>
        )}
    </div>
 );
}
export default Settings;


