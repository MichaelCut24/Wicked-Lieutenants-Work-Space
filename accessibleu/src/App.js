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
          <nav> {/* Navigation Bar component */}
            <center><img src='./nobg-logo.png' alt="logo"/></center>
            <NavLink to="/">Home</NavLink>
            <NavLink to="login">Login</NavLink>
            <NavLink to="communities">Communities</NavLink>
            <NavLink to="account">Account</NavLink>
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
