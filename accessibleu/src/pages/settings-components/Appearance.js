import React, { useState, useEffect } from 'react';
import './MyAccount.css';
import SettingsBar from '../Top-Bar/Settings-Bar.js';

function Appearance (){
  //Retrieve settings from localStorage or use default values
  const [invertColors, setInvertColors] = useState(() => localStorage.getItem('invertColors') === 'true' || false);
  const [increaseContrast, setIncreaseContrast] = useState(() => localStorage.getItem('increaseContrast') === 'true' || false);
  const [applyColorFilters, setApplyColorFilters] = useState(() => localStorage.getItem('applyColorFilters') === 'true' || false);
  const [reduceWhitePoint, setReduceWhitePoint] = useState(() => localStorage.getItem('reduceWhitePoint') === 'true' || false);
  const [brightness, setBrightness] = useState(() => parseInt(localStorage.getItem('brightness')) || 100);
  const [font, setFont] = useState(() => localStorage.getItem('font') || 'Arial, sans-serif');
  const [fontSize, setFontSize] = useState(() => parseInt(localStorage.getItem('fontSize')) || 16);
  
  //Apply current settings to the entire website
  const applySettings = () => {
    //Contrast settings
    let filterValue = '';
    if (invertColors) filterValue += 'invert(100%) '; //Invert colors
    if (increaseContrast) filterValue += 'contrast(200%) '; //Increase contrast
    if (applyColorFilters) filterValue += 'sepia(100%) saturate(200%) '; //Color filters
    if (reduceWhitePoint) filterValue += 'brightness(50%)'; //Reduce white point
  
    document.documentElement.style.setProperty('--brightness', `${brightness}%`); //Brightness
    document.documentElement.style.setProperty('--font', `${font}`); //Font
    document.documentElement.style.setProperty('--fontSize', `${fontSize}px`); //Font size
    document.documentElement.style.filter = filterValue;

    //Save settings to localStorage
    localStorage.setItem('invertColors', invertColors);
    localStorage.setItem('increaseContrast', increaseContrast);
    localStorage.setItem('applyColorFilters', applyColorFilters);
    localStorage.setItem('reduceWhitePoint', reduceWhitePoint);
    localStorage.setItem('brightness', brightness);
    localStorage.setItem('font', font);
    localStorage.setItem('fontSize', fontSize);
  };

  useEffect(() => {
    applySettings();
  }, [invertColors, increaseContrast, applyColorFilters, reduceWhitePoint, brightness, font, fontSize]);

  //Function to handle brightness setting
  const handleBrightnessChange = (e) => {
    setBrightness(parseInt(e.target.value));
  };

  //Function to handle font setting
  const handleFontChange = (e) => {
    setFont(e.target.value);
  };

  //Function to handle font size setting
  const handleFontSizeChange = (e) => {
    setFontSize(parseInt(e.target.value));
  };

  //Handle checkbox toggles
  const handleToggleChange = (setter) => {
    return () => {
      setter((prev) => !prev);
    };
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
            <label>Invert Colors:</label>
            <input
              type="checkbox"
              checked={invertColors}
              onChange={() => {
                handleToggleChange(setInvertColors(!invertColors));
              }}
            />
          </div>
          
          <div className="appearance">
            <label>Increase Contrast:</label>
            <input
              type="checkbox"
              checked={increaseContrast}
              onChange={() => {
                handleToggleChange(setIncreaseContrast(!increaseContrast));
              }}
            />
          </div>

          <div className="appearance">
            <label>Apply Color Filters:</label>
            <input
              type="checkbox"
              checked={applyColorFilters}
              onChange={() => {
                handleToggleChange(setApplyColorFilters(!applyColorFilters));
              }}
            />
          </div>

          <div className="appearance">
            <label>Reduce White Point:</label>
            <input
              type="checkbox"
              checked={reduceWhitePoint}
              onChange={() => {
                handleToggleChange(setReduceWhitePoint(!reduceWhitePoint));
              }}
            />
          </div>

          <div className="appearance">
            <label>Brightness:</label>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={brightness}
              onChange={handleToggleChange(handleBrightnessChange)}
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
              {/* Add more font options here */}
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
              onChange={handleToggleChange(handleFontSizeChange)}
            />
          </div>

        </form>
      </div>
    
    </>
  );
};
export default Appearance;

  