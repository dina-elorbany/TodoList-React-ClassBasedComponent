import React from "react";
import "./Todos.css";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => (
      <div className="collection-item item" key={todo.id}>
        <div onClick={() => deleteTodo(todo.id)}>{todo.content}</div>
      </div>
    ))
  ) : (
    <p className="center done-msg">You don't have any Todos 😁</p>
  );

  return (
    <div className="todos collection border-warning shadow">{todoList}</div>
  );
};

export default Todos;
