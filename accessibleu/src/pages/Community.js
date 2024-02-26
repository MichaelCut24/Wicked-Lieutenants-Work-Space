// Communties page

// NOTE: Everything in the className part is tailwind CSS, yall can delete everything in it once
// Home.css is created. Go to https://v2.tailwindcss.com/docs/ to lookup the syntax and
// convert tailwind into Home.css if Danny has not done it (he will eventually). Or yall can just delete everything
// and start over.

import {NavLink} from "react-router-dom";
import './Community.css';
import Feed from "./home-components/Feed.js";
import React from "react"

export default function Community(){
    return (
        <div className="Page">
            <header className='TopSection'>
                <div className="TopSearchBar">
                    <input id="searchbar" placeholder="Search for a post" />
                </div>  
                <ul className='TopBtns'>
                <li className='HomeBtn'>
                    <NavLink to= "/"><i class='bx bx-home'></i></NavLink>
                </li>

                <li className='MessageBtn'>
                    <NavLink to="#"> <i class='bx bx-message-dots' ></i></NavLink>
                </li>

                <li className='NotifcationBtn'>
                    <NavLink to="#"><i class='bx bx-bell' ></i></NavLink>
                </li>
            </ul>
            </header>  
            <div className="MainSection">
                <div className="RecentPost">
                    <Feed/> 
                </div>
            </div>
            <footer className=" BottomSection">
                <p className='ServerName'> University of North Texas.U</p> 
            </footer>
    </div>
      );
}
