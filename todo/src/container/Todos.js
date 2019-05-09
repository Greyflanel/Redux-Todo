import React, { Component } from "react";
import { connect } from "react-redux";
import { addedTodo } from "../actions/action";

class Todo extends Component {
  state = {
    value: ""
  };
  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    addedTodo({ value: this.state.value, completed: false });
    // event.preventDefault();
  };

  render() {
    // console.log(this.props.todos[0]);
    console.log(this.props);
    

    return (
      <div>
        <h1>Todo List</h1>
        <ul>{this.props.todos.map(todo => todo.value)}</ul>
        <form onSubmit={this.submitHandler}>
          <input type="text" name="value" value={this.state.value} onChange={this.changeHandler} />
          <button type="submit">Add Todos</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state
  };
};

export default connect(
  mapStateToProps,
  addedTodo
)(Todo);
