import React, { useState } from 'react';

import './MyAccount.css';
import SettingsBar from '../Top-Bar/Settings-Bar.js';

function Notifications (){
  const [allNotifications, setAllNotifications] = useState(false);
  const [dailyEmails, setDailyEmails] = useState(false);
  const [weeklyEmails, setWeeklyEmails] = useState(false);
  const [monthlyEmails, setMonthlyEmails] = useState(false);

  // Function to toggle notifications
  const toggleAllNotifications = () => {
    setAllNotifications(!allNotifications);
  };  

  const toggleDailyEmails = () => {
    setDailyEmails(!dailyEmails);  
  };

  const toggleWeeklyEmails = () => {
    setWeeklyEmails(!weeklyEmails);
  };

  const toggleMonthlyEmails = () => {
    setMonthlyEmails(!monthlyEmails);
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
            <li><a className='activeBox'>Notifications</a></li>
            <li>Language</li>
            <li>Advanced</li>
          </ul>
        </div>
      </div>*/}

        <div class="formBox">
            <div class="formHeading">Notifications</div>
            <div class="boxHeading"></div>
            <div class="container">
              <form>
                <div className="option-heading">
                  <label>All Notifications</label> 
                  <label className="toggle-switch-main"> 
                    <input type="checkbox" checked={allNotifications} onChange={toggleAllNotifications} />
                    <span className="slider"></span>
                  </label> 
                </div>

                <section id="subHeadings">
                  <li>Emails</li>
                </section>
                

                <div className="option-a">
                  <label>Daily Emails:</label>
                  <label className="toggle-switch-sub"> 
                    <input type="checkbox" checked={dailyEmails} onChange={toggleDailyEmails} />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="option-a">
                  <label>Weekly Emails:</label>
                  <label className="toggle-switch-sub"> 
                    <input type="checkbox" checked={weeklyEmails} onChange={toggleWeeklyEmails} />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="option-a">
                  <label>Monthly Emails:</label>
                  <label className="toggle-switch-sub"> 
                    <input type="checkbox" checked={monthlyEmails} onChange={toggleMonthlyEmails} />
                    <span className="slider"></span>
                  </label>
                </div>
                
                <section id="subHeadings">
                  <li>Activity</li>
                </section>
                
                <div className="option-a">
                  <label>New posts in communities you follow:</label>
                  <label className="toggle-switch-sub"> 
                    <input type="checkbox" checked={monthlyEmails} onChange={toggleMonthlyEmails} />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="option-a">
                  <label>Comments on your posts:</label>
                  <label className="toggle-switch-sub"> 
                    <input type="checkbox" checked={monthlyEmails} onChange={toggleMonthlyEmails} />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="option-a">
                  <label>Replies on your posts:</label>
                  <label className="toggle-switch-sub"> 
                    <input type="checkbox" checked={monthlyEmails} onChange={toggleMonthlyEmails} />
                    <span className="slider"></span>
                  </label>
                </div>
                
                  
            
              </form>
        </div>
      </div>
    </>

  );

};
export default Notifications;

  