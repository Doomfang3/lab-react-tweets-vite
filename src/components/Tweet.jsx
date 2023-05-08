import Actions from "./Actions";
import Message from "./Message";
import User from "./User";
import Timestamp from "./Timestamp";
import ProfileImage from "./ProfileImage";

function Tweet(props) {
  console.log(props.tweet.user);
  console.log(props.tweet.message);
  console.log(props.tweet.timestamp);
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp timestamp={props.tweet.timestamp} />
        </div>
        <Message message={props.tweet.message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
