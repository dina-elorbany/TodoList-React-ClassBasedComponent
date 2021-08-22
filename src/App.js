import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "study redux" },
      { id: 2, content: "create a react project" },
    ],
  };

  deleteTodo = (id) => {
    const todosLeft = this.state.todos.filter((todo) => todo.id !== id);

    this.setState({
      todos: todosLeft,
    });
  };

  addTodo = (todo) => {
    todo.id = Math.floor(Math.random() * 50);
    let todos =
      todo.content !== "" ? [...this.state.todos, todo] : [...this.state.todos];

    this.setState({
      todos,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="center mt-5 mb-4">Todo List</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
