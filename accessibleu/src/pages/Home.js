<<<<<<< Updated upstream

const Home = () => {
  return (
  <>
  <div class="header">
    <a href="#default" id="main">
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

<div class="div1">Popular Today!</div>

<header>

<script>
function openNav() {
  document.getElementById("mySidebar").style.width = "200px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
</script>
</header>
</>
    
  );
}

export default Home;
=======
// HOME PAGE

// NOTE: Everything in the className part is tailwind CSS, yall can delete everything in it once
// Home.css is created. Go to https://v2.tailwindcss.com/docs/ to lookup the syntax and
// convert tailwind into Home.css if Danny has not done it (he will eventually). Or yall can just delete everything
// and start over.

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
>>>>>>> Stashed changes
