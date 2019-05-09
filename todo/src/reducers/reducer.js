import { ADDTODO, DELETE_TODO } from '../actions/action.js';

const initialState = [
     {
         id: 0,
        value: "Mow the lawn",
        completed: false
    }
]


export default (state = initialState, action) => {
console.log(action.type);
    switch (action.type) {
        case ADDTODO:
        return state.concat(action.payload)
        // return Object.assign([], state).push({
        //     value: action.payload.value,
        //     completed: action.payload.completed
        // })
        case DELETE_TODO:
        return Object.assign([], state).filter((todo, index) => {
            return todo.id !== index;
        })
    default:
    return state;
    }
}
