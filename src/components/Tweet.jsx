import Actions from "./Actions.jsx";
import Message from "./Message.jsx";
import ProfileImage from "./ProfileImage.jsx";
import Timestamp from "./Timestamp.jsx";
import User from "./User.jsx";

function Tweet({ tweet }) {
	const { user, message, timestamp } = tweet;
	return (
		<div className="tweet">
			{/* <img src={user.image} className="profile" alt="profile" /> */}
			<ProfileImage image={user.image} />

			<div className="body">
				<div className="top">
					<User name={user.name} handle={user.handle} />
					<Timestamp timestamp={timestamp} />
				</div>

				<Message message={message} />
				<Actions />
			</div>

			<i className="fas fa-ellipsis-h"></i>
		</div>
	);
}

export default Tweet;
