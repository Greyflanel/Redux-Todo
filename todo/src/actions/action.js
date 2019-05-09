export const ADDTODO = 'ADDTODO';
export const DELETE_TODO = 'DELETE_TODO';


export const addedTodo = (todo) => {
    console.log(todo);
    
    return {
        type: ADDTODO,
        // payload: todo
        payload: {value: todo.value,
        completed: todo.completed}
    };
};

export const deleteTodo = (index) => {
    return {
        type: DELETE_TODO,
        payload: index
    };
};