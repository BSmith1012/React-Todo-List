import React from "react";

function TodoItem(props) {
  return (
    <div
      className="todo-item"
      style={
        props.todos.completed === true ? { backgroundColor: "#2f4f4f" } : null
      }
    >
      <input
        type="checkbox"
        id={props.todos.id}
        className="todo-checkbox"
        checked={props.todos.completed}
        onChange={props.handleChange}
      />
      <p
        style={
          props.todos.completed === true
            ? { textDecoration: "line-through", opacity: "0.3" }
            : null
        }
      >
        {props.todos.todoText}
      </p>
      <span
        className="todo-item-delete"
        id={props.todos.id}
        onClick={props.handleChange}
      >
        &#10005;
      </span>
    </div>
  );
}

export default TodoItem;
