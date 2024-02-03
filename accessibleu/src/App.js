import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom' // React Router to create page routes/links
import React, {useState} from "react"

// IMPORT YOUR .JS PAGE HERE
import Login from './pages/Login';
import Home from "./pages/Home"
import Community from './pages/Community';
import Settings from './pages/Settings';

import './App.css';

function App() {
  const[isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <Router> {/* Everything related to the page routing will be put inside here */} 
          <nav className={`nav ${isNavOpen ? "nav-open" : "nav-closed"}`}> {/* Navigation Bar component */}
            <center><img src='./nobg-logoWH.png' alt="logo"/></center>

        {/* <div id="mySidenav" class="sidenav">
              <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            </div>
            <div id="main">
              <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>
            </div> */}
          
            <div className='NavLinks'>
              <NavLink to="/">Home</NavLink>
              <NavLink to="login">Login</NavLink>
              <NavLink to="communities">Communities</NavLink>
              <NavLink to="settings">Settings</NavLink>
            </div>
            <div className='ClosedIcons'>
              <NavLink to="/"><span class="material-symbols-outlined" id = "NavHome">home</span></NavLink>
              <NavLink to="login"><span class="material-symbols-outlined" id = "NavLogin">login</span></NavLink>
              <NavLink to="communities"><span class="material-symbols-outlined" id = "NavCommunities">groups</span></NavLink>
              <NavLink to="settings"><span class="material-symbols-outlined" id = "NavSettings">Settings</span></NavLink>
            </div>
          </nav>
            <button className ="toggle-nav" onClick={() => setIsNavOpen(!isNavOpen)}>
              <span class="material-symbols-outlined">
                {isNavOpen? "toggle_on" : "toggle_off"} 
              </span>
  </button>
        <main>
            <Routes> {/* Insert your page component here !!! */}
              <Route exact path="/" element={<Home/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="communities" element={<Community/>}/>
              <Route path="Settings" element={<Settings/>}/>
            </Routes>
        </main> 
      </Router> 
    </>       
  );
}

{/*function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}*/}


export default App;
