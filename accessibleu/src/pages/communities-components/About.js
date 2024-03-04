import "./About.css"
import React from 'react';

function About(){
    return(
        <div className="Aboutbox">
            <h1 className="ServerName">Univeristy of North Texas.U</h1>
            <p className="Info">This a demo of where infomation about the community would be</p>
            <div className='bar'>
              <span class="material-symbols-outlined"></span>
            </div>
            <p className="stats">Stats about the server would go here, people in the server and the amount of post in the server</p>
            <div className='bar2'>
              <span class="material-symbols-outlined"></span>
            </div>
            <button className="CreatePost"><a href="#">Create a Post</a></button>
            <ul className="Rules">
                <h1>Rules</h1>
                <li>
                    <p> 1 This is where the rules would go</p>
                </li>
                <li>
                    <p> 2  Theoretically you would be able to put multiple rules here </p>
                </li>
                <li>
                    <p> 3 Hopefully people follow the rules </p>
                </li>
                <li>
                    <p> 4 If not, it is what it is</p>
                </li>
            </ul>
        </div>
    );

}

export default About;