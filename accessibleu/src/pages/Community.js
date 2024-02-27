// Communties page

// NOTE: Everything in the className part is tailwind CSS, yall can delete everything in it once
// Home.css is created. Go to https://v2.tailwindcss.com/docs/ to lookup the syntax and
// convert tailwind into Home.css if Danny has not done it (he will eventually). Or yall can just delete everything
// and start over.


import './Community.css'
import React from "react"

export default function Community(){
    return (
        <div className="Page">    
        <div className="TopSearchBar">
            <input id="searchbar" placeholder="Search for a post" />
        </div>
        <div className= "Homebutton">
            <a href='/'>
                <button>
                    <img src = './HomeIcon.png'alt = 'HomeIcon'>
                    </img>
                </button>
            </a>
        </div>
        <div className='Messages'>
            <a href = '/'>
                <button>
                    <img src = './MessageIcon.png' alt ="Message">
                    </img>
                </button>
            </a>
        </div>
        <div className='Bell'>
            <a href = '/'>
                <button>
                    <img src = './Bellicon.png' alt ="Notification">
                    </img>
                </button>
            </a>
        </div>    
        <div className="MainSection">
            <div className="RecentPost">
            <p>According to all known laws of aviation,there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.
            </p>
            </div>
        </div>
        <div className=" BottomSection">
            <p className='ServerName'> University of North Texas.u</p>
            <div className='CreatePost'>
            <a href ='/'>
                <button>
                    <p>Create a Post</p>
                </button>
            </a>
            </div>  
        </div>
    </div>
      );
}
