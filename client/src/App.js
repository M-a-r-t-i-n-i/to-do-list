// basics
import "./App.css";
// importing components
import TaskTextField from "./components/TaskTextField";
import Button from "./components/Button";
import TaskList from "./components/TaskList";
// import Comments from "./components/Comments";
import Heading from "./components/Heading";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const dummyTaskList = ["Buy shampoo", "Be awesome", "Smile every morning"];

  const listHeading = "SomethingElse";
  const headingText = "Example";
  const [textInput, setTextInput] = useState({});
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const createTask = () => {
    setData([...data], { text: textInput, id: uuidv4() });
    console.log(data);
  };
  // const []
  return (
    <>
      <TaskTextField setTextInput={setTextInput} />
      <Button buttonName="Confirm" onClickHandler={createTask} />
      <p>{textInput}</p>
      <TaskList listName={listHeading} listItems={data} />
      {/* <Comments required={true} /> */}
      {/* <Heading headingText={headingText} headingType="h1" /> */}
      {/* <Heading headingText={headingText} headingType="h6" /> */}
    </>
  );
}
export default App;
