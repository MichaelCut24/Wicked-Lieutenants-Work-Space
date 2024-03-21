import LoginState from "../login-components/firebase-auth/LoginState";
import "./TopBar.css"

function TopBar (){
  return(
    <div className ="header flex" id="myHeader">
        <a href="#default" className="welcome">Welcome</a> 
        <div className="header-right flex">
          <div className="search-container">
            <input type="text" placeholder="🔍  Search..." name="search"></input>
          </div>
          <div className="login-state-container">
            <LoginState/>
          </div>
        </div>
    </div>
  )  
}

export default TopBar;

