import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom' // React Router to create page routes/links
import React, {useState} from "react"

// IMPORT YOUR .JS PAGE HERE
import Login from './pages/Login';
import Home from "./pages/Home"
import Community from './pages/Community';

import './App.css';

function App() {
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
                  <i class='bx bx-home'></i>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <i class='bx bx-log-in-circle'></i>
                  <NavLink to="login">Login</NavLink>
                </li>
                <li>
                  <i class='bx bx-group'></i>
                  <NavLink to="communities">Communities</NavLink>
                </li>
                <li>
                  <i class='bx bx-cog'></i>
                  <NavLink to="#">Settings</NavLink>
                </li>
              </ul>
            </div>
            <div className='bar'>
              <span class="material-symbols-outlined">remove</span>
            </div>
          </nav>
        <main>
            <Routes> {/* Insert your page component here !!!*/}
              <Route exact path="/" element={<Home/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="communities" element={<Community/>}/>
            </Routes>
        </main>   
      </Router> 
    </>       
  );
}

export default App;
