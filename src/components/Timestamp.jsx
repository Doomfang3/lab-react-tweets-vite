function Timestamp(props) {
  console.log("props from Timestamp: ", props);
  return <span className="timestamp">{props.timestamp}</span>;
}

export default Timestamp;
