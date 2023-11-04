import "./Home.css"

function Home(){
  return (
    <div class="page">

      <div class="header">
          <a href="#default" id="main"/>
          <button class="openbtn" onclick="openNav()">☰ </button>  
          <a href="#default" class="logo">AccessibleU</a>
          <div class="header-right">   
          </div>

          <div id="mySidebar" class="sidebar">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"> </a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
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
    </div>
  );
}

export default Home;
