import { ADDTODO, DELETE_TODO } from '../actions/action.js';

const initialState = [
     {
        id: 0,
        value: "Mow the lawn",
        completed: false
    }
]

export default (state = initialState, action) => {

    switch (action.type) {
        case ADDTODO:
        return Object.assign([], state).concat()
        case DELETE_TODO:
        return Object.assign([], state)
    default:
    return state;
    }
}
