import "./Home.css"
import TopBar from './Top Bar/TopBar.js';
import Feed from "./home-components/Feed.js";
import PopularCommunities from "./PopularCommunities.js";

function Home(){
  return (
    <>
        <div className="topbar border border-1 border-black"><TopBar/></div>
        {/* Popular section */} {/* work on this later , try to combine the dots into a list or a grid with the links */}
        {/* Femi's code */}
        <div class="sidenav">
          <h3>Popular Communities</h3>
          <div className="topbar border border-1 border-black"><PopularCommunities/></div>
        </div>
      <Feed/> 
    </>
  );
}

export default Home;
