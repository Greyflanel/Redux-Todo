export const ADDTODO = 'ADDTODO';

export const addedTodo = (todo) => {
    return {
        type: ADDTODO,
        payload: todo,
    };
};