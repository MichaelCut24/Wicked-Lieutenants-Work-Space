import React, { useState } from 'react';

import './MyAccount.css';
import SettingsBar from '../Top-Bar/Settings-Bar.js';

function Advanced (){
  const [allNotifications, setAllNotifications] = useState(false);

  const toggleAllNotifications = () => {
    setAllNotifications(!allNotifications);
  };  

  return (
    <>
      <div class="topbar border border-1 border-black"><SettingsBar/></div>

      {/*<div class="menuBox">
        <div class="settingsMenu">
          <ul>
            <li>MyAccount</li>
            <li>Appearance</li>
            <li>Privacy & Security</li>
            <li>Notifications</li>
            <li>Language</li>
            <li><a className='activeBox'>Advanced</a></li>
          </ul>
        </div>
      </div>*/}

     
        <div class="formHeading">Advanced</div>
       
        <div class="container">
          <form className='appearance-settings'>
            <div>
              <label>Content Visibility</label> 
              <label className="toggle-switch-main"> 
                
                  <span className="slider"></span>
              </label>
              <label class="description">Posts created by this profile will be public and visible to anyone.</label>
            </div>

            <div className="option-heading">
              <label>Community Activity</label> 
              <label className="toggle-switch-main"> 
                
                  <span className="slider"></span>
              </label>
              <label class="description">Show the communites I am active in on my profile page. </label>
            </div>

            <div className="option-heading">
              <label>Clear Post History</label> 
              <label className="toggle-switch-main"> 
                <span className="slider"></span>
              </label>
              <label class="description">Remove your post viewing history.</label>
            </div>

            <section className="option-heading">
              <label>Feed Settings</label>
            </section>

            <div className="option-b">
              <label>Autoplay Videos</label> 
              <label className="toggle-switch-sub"> 
                <span className="slider"></span>
              </label>
              <label class="description">All media will play automatically when in view.</label>
            </div>

            <div className="option-b">
              <label>Open Posts in a New Tab</label> 
              <label className="toggle-switch-sub"> 
                <span className="slider"></span>
              </label>
              <label class="description">When enabled selected posts will open in a new tab.</label>
            </div>

          </form>
        </div>
     
    </>
  );
};
export default Advanced;

  