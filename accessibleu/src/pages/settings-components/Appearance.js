import { NavLink } from "react-router-dom";
import React from "react";

import './Appearance.css';
import SettingsBar from '../Top-Bar/Settings-Bar.js';


function Appearance() {
  return (
    <>
    <div className="settingsBar border border-1 border-black"><SettingsBar/></div>
      
    <div class="menuBox">
      <div class="settingsMenu">
        <a class="activeBox">Appearance<br/></a>
        <ul>
          <nav id='settings'>
            <li><NavLink to="settings">My Account</NavLink></li>
            <li><NavLink to="privacySecurity">Privacy & Security</NavLink></li>
            <li><NavLink to="notifications">Notifications</NavLink></li>
            <li><NavLink to="language">Language</NavLink></li>
            <li><NavLink to="advanced">Advanced</NavLink></li>
          </nav>
        </ul>
      </div>
    </div>
    </>
  );
}
  
export default Appearance;
  