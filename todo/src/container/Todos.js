import React, { Component } from "react";
import { connect } from "react-redux";
import { addedTodo, deleteTodo } from "../actions/action"

class Todo extends Component {
  render() {
      console.log(this.props.todos[0]);
      
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {this.props.todos.map(todo => 
          todo.value
          )}
        </ul>
        <form onSubmit={() => addedTodo} >
        <input type="text" />
        <button type="submit" >Add Todos</button>
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

export default connect(mapStateToProps)(Todo);
