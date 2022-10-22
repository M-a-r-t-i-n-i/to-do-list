function Button(props) {
  return <button onClick={props.onClickHandler}>{props.buttonName}</button>;
}

export default Button;
