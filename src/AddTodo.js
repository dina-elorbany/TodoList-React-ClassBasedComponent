import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    id: "",
    content: "",
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addTodo(this.state);
    this.setState({
      content: "",
    });
  };

  render() {
    return (
      <div>
        <form className="container" onSubmit={this.handleSubmit}>
          <label>Add new Todo:</label>
          <input
            type="text"
            className="input-field"
            onChange={this.handleChange}
            value={this.state.content}
          />
          <button
            className="btn btn-light"
            disabled={this.state.content.length < 1}
          >
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
