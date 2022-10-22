function Button(props) {
  return (
    <button type="button" onClick={props.eventHandler}>
      {props.buttonName}
    </button>
  );
}

export default Button;
