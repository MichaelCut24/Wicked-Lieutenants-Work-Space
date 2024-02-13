import { NavLink } from "react-router-dom";
import React from "react"

import "./Privacy-Security.css";
import SettingsBar from '../Top-Bar/Settings-Bar';

function PrivacySecurity() {
    return (
      <>
        <div className="topbar border border-1 border-black"><SettingsBar/></div>
      
        <div class="menuBox">
          <div class="settingsMenu">
            <NavLink to="settings">My account <br/></NavLink> 
            <NavLink to="appearance">Appearance <br/></NavLink>
            <a class="activeBox"> Privacy & Security <br/></a>
            <NavLink to="notifications"> Notifications <br/></NavLink>
            <NavLink to="language"> Language <br/></NavLink>
            <NavLink to="advanced"> Advanced<br/></NavLink>
          </div>
        </div> 
      </>
   );
  }
  
export default PrivacySecurity;