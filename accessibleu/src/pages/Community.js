// Communties page

// NOTE: Everything in the className part is tailwind CSS, yall can delete everything in it once
// Home.css is created. Go to https://v2.tailwindcss.com/docs/ to lookup the syntax and
// convert tailwind into Home.css if Danny has not done it (he will eventually). Or yall can just delete everything
// and start over.


import './Community.css'
import React from "react"
import About from "./communities-components/About.js"
import Feed from "./home-components/Feed.js"

export default function Community(){
    return (
        <div className="Page">
            <header className='TopSection'>
                <div className="TopSearchBar">
                    <input id="searchbar" placeholder="Search for a post" />
                </div>  
            </header>  
            <div className="MainSection">
                <div className="RecentPost">
                    <div className='feedcom'>
                        <Feed/>
                    </div>
                    <div className="About">
                        <About/>
                    </div>
                </div>
            </div>
        </div>   
    );
}
