function TaskListItem({ listItems, setData, data }) {
  function updateTask(id) {}

  function deleteTask(id) {
    setData(data.filter((item) => item.id !== id));
  }

  return listItems.map((item) => (
    <li className="task__list-item" key={item.id}>
      <span>{item.text}</span>
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
            updateTask(item.id);
          }}
        >
          Update
        </button>
      </div>
    </li>
  ));
}

export default TaskListItem;
