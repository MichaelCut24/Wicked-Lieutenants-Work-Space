import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'
import './App.css';

import Login from './pages/Login';
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Router> 
        <header >
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="login">Login</NavLink>
          </nav>
        </header>
        <main>
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route path="login" element={<Login/>}/>
            </Routes>
        </main>   
      </Router>  
    </>       
  );
}

export default App;
