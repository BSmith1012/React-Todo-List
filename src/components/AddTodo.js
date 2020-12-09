import React from "react";

function AddTodo(props) {
  return (
    <form id="todo-add" onSubmit={props.addTodo}>
      <input
        type="text"
        id="todo-add-input"
        placeholder="Write To-do here..."
        value={props.newTodo}
        onChange={props.handleChange}
      />
      <button id="todo-add-button" type="submit">
        Add To-Do
      </button>
    </form>
  );
}

export default AddTodo;
