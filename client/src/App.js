import { useState } from "react";

// Dependencies
import { v4 as uuid4 } from "uuid";

// Styling
import "./App.css";

// Components
import Button from "./components/Button";
import TaskList from "./components/TaskList";
import TaskTextField from "./components/TaskTextField";

function App() {
  const [textInput, setTextInput] = useState("");
  const [data, setData] = useState([]);

  const createTask = () => {
    if (textInput === "") return;

    const id = uuid4();

    setData([...data, { id: id, text: textInput }]);

    setTextInput("");
  };

  return (
    <main>
      <section className="task__input">
        <TaskTextField setTextInput={setTextInput} textInput={textInput} />
        <Button buttonName="Confirm" eventHandler={createTask} />
      </section>
      <section className="task__list-container">
        <TaskList
          listName={"My To Do List"}
          listItems={data}
          setData={setData}
        />
      </section>
    </main>
  );
}

export default App;
