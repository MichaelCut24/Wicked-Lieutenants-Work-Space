import "./Home.css"
import TopBar from './Top Bar/TopBar.js';
import Feed from "./home-components/Feed.js";

function Home(){
  return (
    <>
      <div class="main">
        <TopBar/>
        {/* Popular section */} {/* work on this later , try to combine the dots into a list or a grid with the links */}
        {/* Femi's code */}
        <div class="sidenav">
          <h3>Popular Communities</h3>
            <a href="#community 1">Community 1 </a>
            <a href="#community 2">Community 2 </a>
            <a href="#community 3">Community 3 </a>
            <a href="#community 4">Community 4 </a>
        </div>
        <div className="dots">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div> 
        </div>
      </div>
      <Feed/>
    </>
  );
}

export default Home;

