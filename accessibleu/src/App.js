import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom' // React Router to create page routes/links

// IMPORT YOUR .JS PAGE HERE
import Login from './pages/Login';
import Home from './pages/Home';
import Community from './pages/Community';
import Account from './pages/Account';

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
                <NavLink to="account"><i class='bx bx-cog'></i></NavLink>
                  <NavLink to="account">Settings</NavLink>
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
            <Routes> {/* Insert your page component here !!!*/}
              <Route exact path="/" element={<Home/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="communities" element={<Community/>}/>
              <Route path="account" element={<Account/>}/>
            </Routes>
        </main>   
      </Router>   
    </>       
  );
}

export default App;
