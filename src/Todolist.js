import { useState } from "react";

const Todolist = () => {
  const [task, settask] = useState("");
  const [task_list, settask_list] = useState([]);

  function clickhandler() {
    settask_list([...task_list, task]);
    settask("");
  }
  function removehandler(index, item) {
    //console.log(item, "is clicked");
    let a = task_list.filter((i) => {
      return i !== item;
    });

    //console.log(a)
    settask_list(a);
  }
  // console.log(task);
  // console.log(task_list);
  function resthandler() {
    let b = [];
    settask_list(b);
  }
  return (
    <>
      <h1> Todo List</h1>
      <div className="dataentry">
        <input
          placeholder="enter tasks"
          value={task}
          onChange={(e) => settask(e.target.value)}
        />
        <button onClick={clickhandler}>add task</button>
      </div>
      <p>your task are as follows</p>
      <div className="display_task">
        {task_list.map((item, index) => (
          <div className="list_item">
            <p key={index}> {item}</p>
            <button onClick={() => removehandler(index, item)}>remove</button>
          </div>
        ))}
        <button onClick={resthandler}>clear the list</button>
      </div>
    </>
  );
};
export default Todolist;

/* function abc(i) {
  return i > 5;
}
let a=[2,334,0,45,5,0,-2]
let b=a.filter(abc)
console.log(b) */
