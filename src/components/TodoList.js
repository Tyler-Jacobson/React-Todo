import React from "react";
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import Todo from "./Todo";

export default function TodoList(props) {
  return (
    <div>
      {props.listItems.map((item) => (
        <Todo item={item} toggleItem={props.toggleItem}/>
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed Tasks
      </button>
    </div>
  );
}
