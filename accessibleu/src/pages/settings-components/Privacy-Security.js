import React, { useState } from 'react';

import './MyAccount.css';
import ChangePassword from './ChangePassword.js'; 
import SettingsBar from '../Top-Bar/Settings-Bar.js';

function PrivacySecurity (){
  const [showChangePassword, setShowChangePassword] = useState(false);

  const handleToggleChangePassword = () => {
    setShowChangePassword(!showChangePassword);
  };

  return (
    <>
      <div class="topbar border border-1 border-black"><SettingsBar/></div>

      {/*<div class="menuBox">
        <div class="settingsMenu"> 
          <ul>
            <li>MyAccount</li>
            <li>Appearance</li>
            <li><a className='activeBox'>Privacy & Security</a></li>
            <li>Notifications</li>
            <li>Language</li>
            <li>Advanced</li>
          </ul>
        </div>
      </div>*/}

        
          <div class="formHeading">Privacy & Security</div>
          
       
          <div class="privacy-settings">
            {showChangePassword && <ChangePassword />}

            <button className='button-chgPsw' onClick={handleToggleChangePassword}>
              {showChangePassword ? 'Save Password' : 'Change Password'}
            </button>

            <div class="infoContainer">Two-Factor Authentication adds an extra layer of Security
                                        to your account, ensuring that only you have the rights to login.</div>
            <div class="button-2fa">Enable 2FA</div>
            
          </div>
      
    </>
  );
};
export default PrivacySecurity;

  