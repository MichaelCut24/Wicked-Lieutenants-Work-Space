import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'; // React Router to create page routes/links
import React, {useState} from "react"

// IMPORT YOUR .JS PAGE HERE
import Login from './pages/Login';
import Home from './pages/Home';
import Community from './pages/Community';
import MyAccount from './pages/settings-components/MyAccount';
import Appearance from './pages/settings-components/Appearance';
import PrivacySecurity from './pages/settings-components/Privacy-Security';
import Notifications from './pages/settings-components/Notifications';
import Language from './pages/settings-components/Language';
import Advanced from './pages/settings-components/Advanced';

import './App.css';

function App() {
  /*const[isNavOpen, setIsNavOpen] = useState(false);*/
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {setIsOpen(!isOpen);};
  /*const[isNavOpen, setIsNavOpen] = useState(false);*/
  return (
    <>
      <Router> {/* Everything related to the page routing will be put inside here */} 
          <nav className= "nav"> {/* Navigation Bar component */}
            <div class="logo">
              <img src="./nobg-logoWH.png" atl="logo"></img>
            </div>
            <div className='NavLinks'>
              <ul>
                <li>
                  <NavLink to="/"><i class='bx bx-home'></i></NavLink>
                  <a><NavLink to="/">Home</NavLink></a>
                </li>
                <li>
                  <NavLink to="login"><i class='bx bx-log-in-circle'></i></NavLink>
                  <NavLink to="login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="communities"><i class='bx bx-group'></i></NavLink>
                  <NavLink to="communities">Communities</NavLink>
                </li>
                <li>
                  <li><a onClick={toggleDropdown} className="dropdown-toggle" i class='bx bx-cog'>Settings</a></li>
                    <li>
                      <div className="dropdown">
                        {isOpen && (
                          <ul className="dropdown-menu">
                            <li><a href="myaccount">MyAccount</a></li>
                            <li><a href="appearance">Appearance</a></li>
                            <li><a href="privacySecurity">Privacy & Security</a></li>
                            <li><a href="notifications">Notifications</a></li>
                            <li><a href="language">Language</a></li>
                            <li><a href="advanced">Advanced</a></li>
                          </ul>
                        )}
                      </div>
                    </li>
                </li>
                
              </ul>

            </div>
            <div className='bar'>
              <span class="material-symbols-outlined"></span>
            </div>
            <footer className='footnav'>
                  <div className='lownav'>
                    <ul>
                      <li>
                        <NavLink to="#">Help</NavLink>
                      </li>
                      <li>
                        <NavLink to="#">Contact Us</NavLink>
                      </li>
                      <li>
                        <i class='bx bx-log-out-circle'></i>
                        <NavLink to="#">Logout</NavLink>
                      </li>
                    </ul>
                  </div>
            </footer>
          </nav>
        <main>
            <Routes> {/* Insert your page component here !!! */}
              <Route exact path="/" element={<Home/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="communities" element={<Community/>}/>
              <Route path="myAccount" element={<MyAccount />}/>
              <Route path="appearance" element={<Appearance />}/>
              <Route path="privacySecurity" element={<PrivacySecurity />}/>
              <Route path="notifications" element={<Notifications />}/>
              <Route path="language" element={<Language />}/>
              <Route path="advanced" element={<Advanced />}/>
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
