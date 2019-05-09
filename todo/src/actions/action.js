export const ADDTODO = 'ADDTODO';
export const DELETE_TODO = 'DELETE_TODO';


export const addedTodo = (todo) => {
    return {
        type: ADDTODO,
        payload: todo,
    };
};

export const deleteTodo = (index) => {
    return {
        type: DELETE_TODO,
        payload: index,
    };
};