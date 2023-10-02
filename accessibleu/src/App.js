import './App.css';
import Home from "./pages/Home.js"
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <main>
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </Router>  
    </main>   
  );
}

export default App;
