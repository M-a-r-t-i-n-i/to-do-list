function TaskTextField(props) {
  return (
    <input
      type="text"
      onChange={(event) => {
        props.setTextInput(event.target.value);
      }}
    />
  );
}

export default TaskTextField;
