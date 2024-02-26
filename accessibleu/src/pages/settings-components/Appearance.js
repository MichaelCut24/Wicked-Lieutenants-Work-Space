import React, { useState } from 'react';

import './MyAccount.css';
import SettingsBar from '../Top-Bar/Settings-Bar.js';

function Appearance (){
  // State for appearance options
  const [contrast, setContrast] = useState(50); // Initial value between 0 and 100
  const [color, setColor] = useState(50); // Initial value between 0 and 100
  const [font, setFont] = useState('Arial, sans-serif');
  const [fontSize, setFontSize] = useState(16); // Initial font size
  
  // Function to handle font size increase
  const increaseFontSize = () => {setFontSize((prevSize) => prevSize + 2);
  };

  // Function to handle font size decrease
  const decreaseFontSize = () => {setFontSize((prevSize) => Math.max(prevSize - 2, 8)); // Ensure font size doesn't go below 8
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

      <div class="formBox">
        <div class="formHeading">Appearance</div>
        <div class="boxHeading"></div>
        <div class="container">
          <form>
            <div className="option-main">
              <label>Contrast:</label>
              <input type="range" value={contrast} onChange={(e) => setContrast(Number(e.target.value))} />
            </div>

            <div className="option-main">
              <label>Color:</label>
              <input type="range" value={color} onChange={(e) => setColor(Number(e.target.value))} />
            </div>

            <div className="font-menu">
              <label>Font:</label>
              <select value={font} onChange={(e) => setFont(e.target.value)}>
                <option value="Arial, sans-serif">Arial</option>
                <option value="Times New Roman, serif">Times New Roman</option>
                <option value="Courier New, monospace">Courier New</option>
              </select>
            </div>

            <div className="option-main">
              <label>Font Size:</label>
              <button className="font-size-button" onClick={decreaseFontSize}>-</button>
              <span>{fontSize}px</span>
              <button className="font-size-button" onClick={increaseFontSize}>+</button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
};
export default Appearance;

  