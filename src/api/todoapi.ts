import todo from "../todo/Todo.tsx";
import type {TodoType} from "../todo/TodoType.ts";

export const fetchTodos = async () => {
    const response = await fetch('http://localhost:3002/todos',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

export const createTodo = async (todo:TodoType) => {
    const response = await fetch('http://localhost:3002/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo)
    })
    if (!response.ok) {
        throw new Error("Error saving the todo");
    }
    return response.json();
}