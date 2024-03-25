import "./TopBar.css"

function SettingsBar (){
  return(
    <div class="header" id="myHeader">
      <a href="default" id="main"></a>
      <a href="#default" class="settings">Settings</a>

      {/*
        <div class="header-right">
          <div class="random-user">User Name</div>
          
          <div class="profile-container">
            <img class="profile-picture" src="path/to/your-profile-image.jpg" ></img>
          </div>

          <div class="notification-container">
            <span class="notification-icon">🔔</span>
          </div>
      */}

      <div class="search-container">
        <form action="/action_page.php">
          <input type="text" placeholder="🔍  Search..." name="search"></input>
        </form>
          
      </div>
    </div>
    
  )    
}
export default SettingsBar;

  