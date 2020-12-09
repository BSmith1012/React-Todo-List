import React from "react";
import AddTodo from "./AddTodo.js";
import TodoItem from "./TodoItem.js";
import "../styles/main.css";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange = (event) => {
    let id = parseInt(event.target.id);

    if (event.target.className === "todo-checkbox") {
      this.setState((prevState) => {
        const updatedTodos = prevState.todos.map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        });
        return {
          todos: updatedTodos,
        };
      });
    } else if (event.target.className === "todo-item-delete") {
      this.setState((prevState) => {
        const updatedTodos = prevState.todos.filter((todo) => todo.id !== id);
        return {
          todos: updatedTodos,
        };
      });
    } else if (event.target.id === "todo-add-input") {
      this.setState({
        newTodo: event.target.value,
      });
    }
  };

  addTodo = (event) => {
    //console.log(event); //For debugging purposes
    event.preventDefault();
    const addedTodo = this.state.newTodo;

    if (addedTodo) {
      this.setState((prevState) => {
        const updatedTodos = prevState.todos;
        updatedTodos.push({
          id: Date.now(),
          todoText: addedTodo.charAt(0).toUpperCase() + addedTodo.slice(1),
          completed: false,
        });
        return {
          todos: updatedTodos,
          newTodo: "",
        };
      });
    }
    //console.log(this.state.todos); //For debugging purposes
  };

  render() {
    const todoComponents = this.state.todos.map((todos) => {
      return (
        <TodoItem
          key={todos.id}
          todos={todos}
          handleChange={this.handleChange}
        />
      );
    });

    return (
      <main>
        <AddTodo
          newTodo={this.state.newTodo}
          addTodo={this.addTodo}
          handleChange={this.handleChange}
        />
        {todoComponents}
      </main>
    );
  }
}

export default Main;
