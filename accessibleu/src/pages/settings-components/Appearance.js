import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom' // React Router to create page routes/links
import React from "react"

import "./Appearance.css";
//import SettingsBar from "./Top Bar/Settings-Bar.js";

function Appearance() {
    return (
      <>
        
        <div class="menuBox">
          <div class="settingsMenu">
            <a class="activeBox">My account <br/></a> 
            <NavLink to="./Appearance.js">Appearance <br/></NavLink>
            <NavLink to="./Privacy-Security.js"> Privacy & Security <br/></NavLink>
            <NavLink to="./Notifivation.js"> Notifications <br/></NavLink>
            <NavLink to="./Language.js"> Language <br/></NavLink>
            <NavLink to="./Advanced.js"> Advanced<br/></NavLink>
          </div>
        </div> 
  
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
      </>
   );
}
  
export default Appearance;
  