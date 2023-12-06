import React, { useEffect } from 'react';
import './Account.css';
import './Home.js'

function Account() {
  useEffect(() => {
    // Set the date we're counting down to
    var countDownDate = new Date('Jan 5, 2024 15:37:25').getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes, and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in an element with id="demo"
      document.getElementById('demo').innerHTML =
        days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById('demo').innerHTML = 'EXPIRED';
      }
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(x);
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <>
      <div className="bgimg">
        <div className="topleft">
          <p>Logo</p>
        </div>

        <div className="middle">
          <h1>COMING SOON</h1>
          <hr />
          <p id="demo" style={{ fontSize: '30px' }}></p>
        </div>

        <div className="bottomleft">
          <p>Some text</p>
        </div>
      </div>
    </>
  );
}

export default Account;
