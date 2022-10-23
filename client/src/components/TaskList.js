import TaskListItem from "./TaskListItem";

function TaskList(props) {
  const { listName, listItems, setData, data } = props;

  const fallbackMessage =
    "Hmm. Nothing to do? Might be time to start adding some new tasks.";

  return (
    <>
      <h1>
        <p>{listName}</p>

        {listItems.length > 0 ? (
          <span>Number of Tasks: {listItems.length}</span>
        ) : null}
      </h1>

      {listItems.length > 0 ? (
        <ul className="task__list">
          <TaskListItem listItems={listItems} setData={setData} data={data} />
        </ul>
      ) : (
        <p>{fallbackMessage}</p>
      )}
    </>
  );
}

export default TaskList;
