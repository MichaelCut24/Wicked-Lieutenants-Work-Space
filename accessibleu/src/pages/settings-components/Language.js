import React, { useState } from 'react';

import './MyAccount.css';
import SettingsBar from '../Top-Bar/Settings-Bar.js';

function Language (){
  const [closedCaptioning, setClosedCaptioning] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Initial language state

  const availableLanguages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Spanish' },
    { code: 'fr', label: 'French' },
    // Add more languages as needed
  ];

  const handleLanguageChange = (languageCode) => {
    // Update the selected language when a new language is chosen
    setSelectedLanguage(languageCode);
  };

  // Function to toggle closed captioning
  const toggleClosedCaptioning = () => {
    setClosedCaptioning(!closedCaptioning);
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
            <li><a className='activeBox'>Language</a></li>
            <li>Advanced</li>
          </ul>
        </div>
      </div>*/}

      <div class="formBox">
        <div class="formHeading">Language</div>
        <div class="boxHeading"></div>
        <div class="container">
          <form>
            <div className="language-menu">
              <label>Select Language:</label>
              <select value={selectedLanguage} onChange={(e) => handleLanguageChange(e.target.value)}>
                  {availableLanguages.map((language) => (
                    <option key={language.code} value={language.code}>
                      {language.label}
                    </option>
                    ))
                  }</select>
            </div>

            <div className="option-main">
              <label>Selected Language: {selectedLanguage}</label>
            </div>    

            <div className="option-main">
              <label>Closed Captioning:</label>
              <label className="toggle-switch-main">
                <input type="checkbox" checked={closedCaptioning} onChange={toggleClosedCaptioning} />
                <span className="slider"></span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );


};
export default Language;

  