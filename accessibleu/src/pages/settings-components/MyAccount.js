import React, { useState } from 'react';

import './MyAccount.css';
import SettingsBar from '../Top-Bar/Settings-Bar.js';


function Settings (){
  const [isEditing, setIsEditing] = useState(false);

  // User data (replace with your actual user data)
  const userData = {
    username: 'john_doe',
    email: 'john.doe@example.com',
    firstName: 'John',
    lastName: 'Doe',
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Save edited data (you can implement the save logic here)
    setIsEditing(false);
  };

  return (
    <>
      <div class="topbar border border-1 border-black"><SettingsBar /></div>
     
        {/*<div class="menuBox">
          <div class="settingsMenu">
            <nav>
              <ul>
                <li><a className='activeBox'>My Account</a></li>
                <li>Appearance</li>
                <li>Privacy& Security</li>
                <li>Notifications</li>
                <li>Language</li>
                <li>Advanced</li>
              </ul>
            </nav>
          </div>
        </div>*/}

      
        <div className="formHeading">My Account</div>
        
        <div >
          {isEditing ? (
            <button className="save-button" onClick={handleSaveClick}>Save</button>
          ) : (
            <button className="edit-button" onClick={handleEditClick}>Edit</button>
          )}
        </div>

        <div className="boxHeading"></div>
        
        <form>
          <div className='form'>
            <label for="userName">Username:  </label>
            {isEditing ? (
              <input type="text" value={userData.username} onChange={(e) => {/* Handle changes */}} />
            ) : (
              <span>{userData.username}</span>
            )}
           

            <label className='email-label' for="email">Email Address: </label>
            {isEditing ? (
              <input type="email" value={userData.email} onChange={(e) => {/* Handle changes */}} />
            ) : (
              <span>{userData.email}</span>
            )}
          </div>
          
          <div className='form'> 
            <label for="firstName">First Name:  </label>
            {isEditing ? (
              <input type="text" value={userData.firstName} onChange={(e) => {/* Handle changes */}} />
            ) : (
              <span>{userData.firstName}</span>
            )}

            <label for="lastName" >Last Name: </label>
            {isEditing ? (
              <input type="text" id="lastName" name="lastName" value={userData.lastName} onChange={(e) => {/* Handle changes */}} />
            ) : (
              <span>{userData.lastName}</span>
            )}  
          </div>
       
          {isEditing ? (
            <button onClick={handleSaveClick}>Save</button>
          ) : (
            <button onClick={handleEditClick}>Edit</button>
          )}
        </form>

        
       
      
      
    </>
 );
}
export default Settings;


