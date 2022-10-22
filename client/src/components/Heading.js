function Heading(props) {
  const Type = props.headingType;
  return <Type>{props.headingText}</Type>;
}

export default Heading;
