import './Home.css'
import React from "react"

export default function Home(){
    return (
        <div className="Page">        
            <div className="TopSearchBar">
                <input id="searchbar" placeholder="Search for a post" />
            </div>
            <div className="MainSection">
                <div className="RecentPost">
                <p>According to all known laws of aviation,there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.
                </p>
                </div>
                <div className="Suggestion">
                <p>According to all known laws of aviation,there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.
                </p>
                </div>
            </div>
        </div>
      );
}