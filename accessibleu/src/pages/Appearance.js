import { NavLink } from 'react-router-dom';
import React from 'react';

import './Settings.css';
import SettingsBar from './Top-Bar/Settings-Bar.js';

function Appearance() {
  return (
    <>
      <div class="topbar border border-1 border-black"><SettingsBar/></div>
      
        <div class="menuBox">
          <div class="settingsMenu">
          
            <ul>
              <li><NavLink to="/Settings">My Account</NavLink></li>
              <li><NavLink to="/Appearance"><a class="activeBox">Appearance</a></NavLink></li>
              <li><NavLink to="/PrivacySecurity">Privacy & Security</NavLink></li>
              <li><NavLink to="/Notifications">Notifications</NavLink></li>
              <li><NavLink to="/Language">Language</NavLink></li>
              <li><NavLink to="/Advanced">Advanced</NavLink></li>
            </ul>
          </div>

          <div class="formBox">
            <div class="formHeading">My Account</div>
            <div class="editButton">Edit</div>
            <div class="boxHeading"></div>
            <div class="container">
              <form>
                  
              </form>

              <div class="infoContainer">Two-Factor Authentication adds an extra layer of Security
                  to your account, ensuring that only you have the rights to login.</div>
              <div class="button-2fa">Enable 2FA</div>
            </div>
          </div>
      </div>
    </>
  );
}
  
export default Appearance;
  