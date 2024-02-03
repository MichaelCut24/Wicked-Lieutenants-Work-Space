import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom' // React Router to create page routes/links
import React from "react"

import "./Notifications.css";
import TopBar from "./Top Bar/Settings-Bar.js";

function Notifications() {
    return (
      <>
        <div className="topbar border border-1 border-black"><TopBar/></div>
      
        <div class="menuBox">
          <div class="settingsMenu">
            <NavLink to="settings">My account <br/></NavLink> 
            <NavLink to="appearance">Appearance <br/></NavLink>
            <NavLink to="privacySecurity"> Privacy & Security <br/></NavLink>
            <a class="activeBox"> Notifications <br/></a>
            <NavLink to="language"> Language <br/></NavLink>
            <NavLink to="advanced"> Advanced<br/></NavLink>
          </div>
        </div> 
      </>
   );
  }
  
export default Notifications;