function TaskTextField({ textInput, setTextInput }) {
  return (
    <input
      type="text"
      value={textInput}
      onChange={(event) => {
        setTextInput(event.target.value);
      }}
    />
  );
}

export default TaskTextField;
