function Message(props) {
  console.log("props from Message: ", props);
  return <p className="message">{props.message}</p>;
}

export default Message;
