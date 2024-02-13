import { NavLink } from "react-router-dom";
import React from "react"

import "./Language.css";
import SettingsBar from "../Top-Bar/Settings-Bar.js";

function Language() {
    return (
        <>
          <div className="topbar border border-1 border-black"><SettingsBar/></div>
        
          <div class="menuBox">
            <div class="settingsMenu">
              <NavLink to="settings">My account <br/></NavLink> 
              <NavLink to="appearance">Appearance <br/></NavLink>
              <NavLink to="privacySecurity">Privacy & Security <br/></NavLink>
              <NavLink to="notifications">Notifications <br/></NavLink>
              <a class="activeBox">Language <br/></a>
              <NavLink to="advanced">Advanced<br/></NavLink>
            </div>
          </div> 
        </>
     );
    }
  
export default Language;