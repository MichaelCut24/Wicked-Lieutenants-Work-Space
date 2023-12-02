import "./TopBar.css"

function TopBar (){
  return(
<div class="header">
          <a href="default" id="main"></a>
          <a href="#default" class="logo">Welcome</a>
            <div class="header-right">
              <div class="search-container">
                <form action="/action_page.php">
                  <input type="text" placeholder="Search..." name="search"></input>
                    <button type="submit"><i class="fa fa-search"></i><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    </button>
                </form>
              </div>
            </div>
        </div>
  )
}
export default TopBar;