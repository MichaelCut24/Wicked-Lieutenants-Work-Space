import "./Home.css"
import Feed from "./home-components/Feed.js";
import NewPost from "./home-components/NewPost.js";

export default function Home(){
  return (
    <div className="home-page-container">
      <NewPost/>
      <Feed/>
    </div>
  );
}

