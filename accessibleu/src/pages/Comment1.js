import Comments from "./comments/Comments";
import './styling/Comment.css'

const Comment1 = () => {
  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <Comments
        commentsUrl="http://localhost:3000/pages/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default Comment1;