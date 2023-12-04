import "./TopBar.css"

function TopBar (){
  return(
    <div class="header" id="myHeader">
      <meta charset="UTF-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <a href="default" id="main"></a>
        <a href="#default" class="welcome">Welcome</a>
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

