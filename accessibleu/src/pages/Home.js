import "./Home.css"

function Home(){
  return (
    <><div class="main">
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
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
    
        
        <div class="row">
          <div class="column">
            <div class="card">
              <h3>Community</h3>
              <p>Title</p>
              <p>Description</p>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <h3>Community</h3>
              <p>Title</p>
              <p>Description</p>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <h3>Community</h3>
              <p>Title</p>
              <p>Description</p>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <h3>Community</h3>
              <p>Title</p>
              <p>Description</p>
            </div>
          </div>
        </div>
        <div class="div1">Trending</div>

    
      </div>
    </>
  );
}

export default Home;

