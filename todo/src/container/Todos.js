import React, { Component } from "react";
import { connect } from "react-redux";

class Todo extends Component {
  render() {
      console.log(this.state);
      
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          <li>Wash dishes</li>
        </ul>
        <input type="text" />
        <button>Add Todos</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(Todo);
