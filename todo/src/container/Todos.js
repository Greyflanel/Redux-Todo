import React, { Component } from "react";
import { connect } from 'react-redux';

class Todo extends Component {
    
    render() {
        return (
<div>
<h1>Todo List</h1>
<ol>
    <li>Wash dishes</li>
</ol>
<input type="text"/>
<button>Add Todos</button>
</div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps)(Todo);