// HOME PAGE

// NOTE: Everything in the className part is tailwind CSS, yall can delete everything in it once
// Home.css is created. Go to https://v2.tailwindcss.com/docs/ to lookup the syntax and
// convert tailwind into Home.css if Danny has not done it (he will eventually). Or yall can just delete everything
// and start over.

import "./styling/Community.css"
import { Scrollbars } from "react-custom-scrollbars" // npm install --save reac-custom-scrollbars is needed.

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
      
      {/* appying scroll bar here would add to half the page */}
      {/* <Scrollbars style={{ width: "100%", height: "100%" }}> */}
    
      <div className="relative w-1/2"> {/* Posts page divider */} 
        <div className="form absolute border border-5 border-black">
          
          {/* applying scroll bar here would apply to only the container */}
          <Scrollbars style={{ width: "100%", height: "100%" }}>  
            <div className="flex flex-col container"> 
              <h1><center>Post Page Divider</center></h1>
                <p>The Star Wars opening crawl is a signature device of the opening sequences of every numbered film of the Star Wars series, an American epic space opera franchise created by George Lucas. Within a black sky background featuring a smattering of stars, the crawl is preceded both by the opening static blue text, "A long time ago in a galaxy far, far away...." and by the Star Wars logo which recedes toward a central point on the screen before disappearing. The crawl text, which describes the backstory and context of the film, then recedes toward a higher point in relation to the screen and with an apparent effect of disappearing in the distance. The visuals are accompanied by the "Main Title Theme", composed by John Williams.</p>

                <p>This sequence has featured at the beginning of each of the main Star Wars saga theatrical films produced by Lucasfilm. Although it has retained the same basic elements, the opening crawl has significantly evolved throughout the series.[further explanation needed] It is one of the most immediately recognizable elements of the franchise and has been frequently parodied.</p>

                <p>The opening crawl was not used in the animated film Star Wars: The Clone Wars or in the Star Wars "Anthology" films, Rogue One and Solo, although all three films begin with the opening text. Additionally, the opening sequence of Solo continues with a short backstory presented in the same style as the opening text, while The Clone Wars uses a narrator to provide exposition in a similar style to a newsreel.</p>
            </div>
          </Scrollbars> 
        </div>
      </div>

      {/* </Scrollbars  */} 

    </div>
  );
}

export default Community;