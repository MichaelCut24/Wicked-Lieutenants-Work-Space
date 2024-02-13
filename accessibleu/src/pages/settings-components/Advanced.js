import { NavLink } from "react-router-dom";
import React from "react"

import "./Advanced.css";
import TopBar from "../Top-Bar/Settings-Bar";

function Advanced() {
    return (
      <>
        
        <div class="menuBox">
          <div class="settingsMenu">
            <NavLink to="settings">My account <br/></NavLink> 
            <NavLink to="appearance">Appearance <br/></NavLink>
            <NavLink to="privacySecurity">Privacy & Security <br/></NavLink>
            <NavLink to="notifications">Notifications <br/></NavLink>
            <NavLink to="language">Language <br/></NavLink>
            <a class="activeBox">Advanced<br/></a>
          </div>
        </div> 
      </>
   );
}
  
export default Advanced;