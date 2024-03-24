import React, { useState } from 'react';

import './MyAccount.css';
import SettingsBar from '../Top-Bar/Settings-Bar.js';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
  
    const handleChangePassword = () => {
      // Add logic here to handle the password change
      console.log(`Changing password from ${oldPassword} to ${newPassword}`);
    };
  
    return (
      <>
      <div className='passwordHeading'>Change Password</div>

      <div>
        <form>
          <div>
            <label className='pass-label' for="oldPassword">Old Password:</label>
            <input
              type="password"
              id="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
  
          <div>
            <label className='pass-label' for="newPassword">New Password:</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
        </form>
      </div>
    </>
    );
  };
  
  export default ChangePassword;