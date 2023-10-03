import { BrowserRouter as Router, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="flex flex-row w-full h-20 w- mt-0.5 self-center border border-1 border-black">
            <Router>
                    <div className="absolute top-5 left-10">
                        <Link to="/">Home/Logo</Link>
                    </div>
                    <div className="absolute top-5 right-20">
                        <Link to="/auth">Log In</Link>
                    </div>       
            </Router>  
        </div>
    );
}

export default NavBar;