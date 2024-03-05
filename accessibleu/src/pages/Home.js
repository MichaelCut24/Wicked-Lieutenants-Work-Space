import "./Home.css"
import TopBar from './Top-Bar/TopBar.js';
import Feed from "./home-components/Feed.js";

function Home(){
  return (
    <>
        <div className="topbar border border-1 border-black"><TopBar/></div>
      <Feed/> 
    </>
  );
}

export default Home;

