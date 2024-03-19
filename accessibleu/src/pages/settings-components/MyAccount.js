import React from 'react';

import './MyAccount.css';
import './Appearance.js';
import SettingsBar from '../Top-Bar/Settings-Bar.js';

import UserInfo from '../login-components/firebase-auth/UserInfo.js';
import PopEdit from '../EditPop/PopEdit.js';


function Settings (){

  
  return (
    <>
      <div class="topbar border border-1 border-black"><SettingsBar /></div>
     
        {/*<div class="menuBox">
          <div class="settingsMenu">
            <nav>
              <ul>
                <li><a className='activeBox'>My Account</a></li>
                <li>Appearance</li>
                <li>Privacy& Security</li>
                <li>Notifications</li>
                <li>Language</li>
                <li>Advanced</li>
              </ul>
            </nav>
          </div>
        </div>*/}

      <div class="formBox">
        <div class="formHeading">My Account</div>
        <div class="editButton"><PopEdit/></div>
        <div class="boxHeading"></div>
        <div class="container">
          <form>

          <div>
        <UserInfo/>
          </div>


              {/*<label for="username">Username:</label>
              <input type="text" id="username" name="username" placeholder="Enter your username"></input>

              <label for="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" placeholder="Enter your first name"></input>

              <label for="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" placeholder="Enter your last name"></input>

              <label for="email">Email Address:</label>
              <input type="email" id="email" name="email" placeholder="contact@accessibleu.com"></input>
          */}
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


