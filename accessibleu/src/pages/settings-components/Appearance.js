import React, { useState } from 'react';

import './MyAccount.css';
import SettingsBar from '../Top-Bar/Settings-Bar.js';

function Appearance (){
  // State for appearance options
  const [contrast, setContrast] = useState(50); // Initial value between 0 and 100
  const [brightness, setBrightness] = useState(100); // Initial value between 0 and 100
  const [font, setFont] = useState('Arial, sans-serif');
  const [fontSize, setFontSize] = useState(16); // Initial font size
  
  // Function to handle contrast change
  const handleContrastChange = (e) => {
    setContrast(e.target.value);
    applySettings();
  };

  // Function to handle brightness setting
  const handleBrightnessChange = (e) => {
    setBrightness(e.target.value);
    applySettings();
  };

  // Function to handle font setting
  const handleFontChange = (e) => {
    setFont(e.target.value);
    applySettings();
  };

  // Function to handle font size setting
  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
    applySettings();
  };

  // Apply current settings to the entire website
  const applySettings = () => {
    document.documentElement.style.setProperty('--contrast', `${contrast}%`);
    document.documentElement.style.setProperty('--brightness', `${brightness}%`);
    document.documentElement.style.setProperty('--font', `${font}`);
    document.documentElement.style.setProperty('--fontSize', `${fontSize}px`);
  };

  return (
    <>
      <div class="topbar border border-1 border-black"><SettingsBar/></div>

      {/*<div class="menuBox">
          <div class="settingsMenu"> 
            <ul>
              <li>MyAccount</li>
              <li><a className='activeBox'>Appearance</a></li>
              <li>Privacy& Security</li>
              <li>Notifications</li>
              <li>Language</li>
              <li>Advanced</li>
            </ul>
          </div>
      </div>*/}

     
        <div class="formHeading">Appearance</div>
      
        <div class="container">
          <form className='appearance-settings'>
            <div className="appearance">
              <label htmlFor="contrastSlider">Contrast:</label>
              <input
                type="range"
                min="0"
                max="200"
                step="1"
                value={contrast}
                onChange={handleContrastChange}
              />
            </div>

            <div className="appearance">
              <label>Brightness:</label>
              <input
                type="range"
                min="0"
                max="200"
                step="1"
                value={brightness}
                onChange={handleBrightnessChange}
              />
            </div>

            <div className="font-menu">
              <label>Font:</label>
              <select value={font} onChange={handleFontChange}>
                <option value="Arial, sans-serif">Arial</option>
                <option value="Verdana, sans-serif">Verdana</option>
                <option value="Georgia, serif">Georgia</option>
                <option value="Courier Prime">Courier</option>
                <option value="Calistoga">Calistoga</option>
                {/* Add more font options as needed */}
              </select>
            </div>

            <div className="appearance">
              <label>Font Size:</label>
              <input
                type="range"
                min="10"
                max="36"
                step="1"
                value={fontSize}
                onChange={handleFontSizeChange}
              />
            </div>

          </form>
        </div>
    
    </>
  );
};
export default Appearance;

  