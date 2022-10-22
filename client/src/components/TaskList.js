import Button from "./Button";
function TaskList(props) {
  console.log(props);
  // const dummyTaskList = props.listItems; // or props.dummyTaskList;
  const items = props.listItems.map((item, index) => (
    <li>
      {item.text}
      <span>{item.id}</span>
      {/* <span>{index + 1}</span> */}
      <Button buttonName="Delete" />
      <Button buttonName="Edit" />
    </li>
  ));
  // dummyTaskList.map((item) => item, 0);
  // next step: check if listItems property is an array before mapping over it
  return (
    <>
      {/* <Items>{props.listItems}</Items> */}
      <h2>{props.listName}</h2>
      <ul>{items}</ul>
      {/* <li>{props.listItems[0]}</li> */}
    </>
  );
}
export default TaskList;
