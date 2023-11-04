import "./Community.css"

function Community(){
  return (
    <div class="page">

      <div class="header">
          <a href="#default" id="main"/>
          <button class="openbtn" onclick="openNav()">☰ </button>  
          <a href="#default" class="logo">AccessibleU</a>
          <div class="header-right">   
          </div>

          <div id="mySidebar" class="sidebar">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">☰ </a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
      </div>

      <div class="row">
        <div class="column">
          <div class="card">
            <h3>Server ex. 1</h3>
            <p>Title</p>
            <p>Description</p>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <h3>Server ex. 2</h3>
            <p>Title</p>
            <p>Description</p>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <h3>Server ex. 3</h3>
            <p>Title</p>
            <p>Description</p>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <h3>Server ex. 4</h3>
            <p>Title</p>
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
