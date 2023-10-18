import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom' // React Router to create page routes/links

// IMPORT YOUR .JS PAGE HERE
import Login from './pages/Login';
import Home from "./pages/Home"

import './App.css';

function App() {
  return (
    <>
      <Router> {/* Everything related to the page routing will be put inside here */} 
          <nav> {/* Navigation Bar component */}
            <NavLink to="/">Home</NavLink>
            <NavLink to="login">Login</NavLink>
          </nav>

        <main>
            <Routes> {/* Insert your page component here !!!*/}
              <Route exact path="/" element={<Home />}/>
              <Route path="login" element={<Login/>}/>
            </Routes>
        </main>   
      </Router>  
    </>       
  );
}

export default App;
