import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom' // React Router to create page routes/links
import React from "react"

import "./Settings.css";
import TopBar from "./Top Bar/Settings-Bar.js";

function Settings() {
  return (
    <>
      <div className="topbar border border-1 border-black"><TopBar/></div>
      
      <div class="menuBox">
        <div class="settingsMenu">
          <a class="activeBox">My account <br/></a> 
          <NavLink to="appearance">Appearance <br/></NavLink>
          <NavLink to="PrivacySecurity"> Privacy & Security <br/></NavLink>
          <NavLink to="Notifications"> Notifications <br/></NavLink>
          <NavLink to="Language"> Language <br/></NavLink>
          <NavLink to="Advanced"> Advanced<br/></NavLink>
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

export default Settings;
