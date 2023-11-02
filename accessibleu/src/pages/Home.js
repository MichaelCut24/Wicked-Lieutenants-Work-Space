import './Home.css'
import React from "react"

export default function Home(){
    return (
        <div className="Page">        
        <div className="TopSearchBar">
            <input id="searchbar" placeholder="Search for a post" />
        </div>
        <div className= "Homebutton">
            <a href='communities'>
                <button>
                    <img src = './HomeIcon.png'alt = 'HomeIcon'>
                    </img>
                </button>
            </a>
        </div>
        <div className="MainSection">
            <div className="RecentPost">
            <h1>
            <p>According to all known laws of aviation,there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.
            </p>
            </h1>
            </div>
        </div>
        <div className=" BottomSection">
            <p> University of North Texas.u</p>
        </div>
    </div>
      );
}