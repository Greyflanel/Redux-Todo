import { ADDTODO } from './todo/src/actions/action.js';

const initialState = {
    todos: []
}

export default (state = initialState, action) => {

    switch (action.type) {
        case ADDTODO:
        return {todos: state.todos}
    
    default:
    return state;
    }
}
