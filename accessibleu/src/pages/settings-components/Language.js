import React from 'react';

import './MyAccount.css';
import SettingsBar from '../Top-Bar/Settings-Bar.js';

function PrivacySecurity (){
  return (
    <>
      <div class="topbar border border-1 border-black"><SettingsBar/></div>

      <div class="menuBox">
          <div class="settingsMenu">
            
            <ul>
              <li>MyAccount</li>
              <li>Appearance</li>
              <li>Privacy & Security</li>
              <li>Notifications</li>
              <li><a className='activeBox'>Language</a></li>
              <li>Advanced</li>
            </ul>
            
          </div>
        </div>

        <div class="formBox">
            <div class="formHeading">Language</div>
            <div class="editButton">Edit</div>
            <div class="boxHeading"></div>
            <div class="container">
                <form>
                    
                </form>
        </div>
      </div>
    </>
  );
};
export default PrivacySecurity;

  