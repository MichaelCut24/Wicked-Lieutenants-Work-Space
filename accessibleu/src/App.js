import './App.css';
import Home from "./pages/Home.js"
import NavBar from './NavBar.js';
import Login from './pages/Login.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <main>
      <NavBar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/auth" element={<Login/>}/>
        </Routes>
      </Router>  
    </main>   
  );
}

export default App;
