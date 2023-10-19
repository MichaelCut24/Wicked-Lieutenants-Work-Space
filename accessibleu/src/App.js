import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom' // React Router to create page routes/links

// IMPORT YOUR .JS PAGE HERE
import Login from './pages/Login';
import Home from "./pages/Home"
import Main from "./pages/MainPage"

import './App.css';

function App() {
  return (
    <>
      <Router> {/* Everything related to the page routing will be put inside here */} 
          <nav> {/* Navigation Bar component */}
            <NavLink to="main">Main</NavLink>
            <NavLink to="login">Login</NavLink>
            <NavLink to="/">Home</NavLink>
          </nav>

        <main>
            <Routes> {/* Insert your page component here !!!*/}
              <Route exact path="/" element={<Home />}/>
              <Route path="login" element={<Login/>}/>
              <Route path="main" element={<Main/>}/>
            </Routes>
        </main>   
      </Router>  
    </>       
  );
}

export default App;
