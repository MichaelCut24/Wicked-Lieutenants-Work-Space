import "./TopBar.css"


function TopBar (){
  return(
    <div class="header" id="myHeader">
        <a href="default" id="main"></a>
        <a href="#default" class="welcome">Welcome</a>
        <a href="default" class="account-button">Account</a>
        
        <div class="header-right">
          <div class="search-container">
            <form action="/action_page.php">
              <input type="text" id="searchInput" name="q" placeholder="Search..."></input>
              <button type="submit" id="searchButton"><span class="search-icon">&#128269;</span></button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default TopBar;

