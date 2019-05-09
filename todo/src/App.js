import React from 'react';
import { Component } from 'react'
import './App.css';
import Todos from './container/Todos';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ""
    };
  
  // this.addTodo = this.addTodo.bind(this);
    };

addTodo(event) {
  event.preventDefault();
  this.props.addTodo({
    value: this.state.newTodo,
    completed: false
  });
  this.setState({
    newTodo: ""
  });
};

  render() {
  return (
    <div className="App">
       <Todos />
    </div>
  );
}
}
export default App;
