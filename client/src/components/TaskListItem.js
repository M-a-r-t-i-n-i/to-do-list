import { useState } from "react";

function TaskListItem({ listItems, setData }) {
  const [editMode, setEditMode] = useState(true);

  function editTask(id) {
    if (editMode) {
      return setEditMode(false);
    }
    setEditMode(true);
  }

  function updateTaskText(event, id) {
    const updatedText = event.target.value;

    const updatedList = listItems.map((item) => {
      if (item.id === id) {
        return { ...item, text: updatedText };
      }
      return item;
    });
    setData(updatedList);
  }

  function deleteTask(id) {
    setData(listItems.filter((item) => item.id !== id));
  }

  return listItems.map((item) => (
    <li className="task__list-item" key={item.id}>
      <input
        className="task__list-item-input"
        value={item.text}
        disabled={editMode}
        onChange={(event) => {
          updateTaskText(event, item.id);
        }}
      />
      <div>
        <button
          onClick={() => {
            deleteTask(item.id);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            editTask(item.id);
          }}
        >
          {editMode ? "Update" : "Save"}
        </button>
      </div>
    </li>
  ));
}

export default TaskListItem;
