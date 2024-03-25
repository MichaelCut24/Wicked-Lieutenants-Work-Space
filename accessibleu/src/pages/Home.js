import "./Home.css"
import TopBar from './Top-Bar/TopBar.js';
import Feed from "./home-components/Feed.js";

function Home(){
  return (
    <>
        <div className="topbar border border-1 border-black"><TopBar/></div>
          <div class="random-user">User Name</div>
          <div class="welcome">AccessibleU</div>

            
          <input id="text" placeholder="Search AccessibleU" />
    

          <div class="profile-container">
            <img class="profile-picture" src="path/to/your-profile-image.jpg" ></img>
          </div>   
          <div>

        </div>

          <div className="feed"><Feed/> </div>          
          
    </>
  );
}

export default Home;

