import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom' // React Router to create page routes/links
import React from "react"

import "./Privacy-Security.css";
import TopBar from "./Top Bar/Settings-Bar.js";

function PrivacySecurity() {
    return (
      <>
        <div className="topbar border border-1 border-black"><TopBar/></div>
      
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