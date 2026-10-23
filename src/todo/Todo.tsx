import {useEffect, useReducer, useState} from "react";
import type {TodoType} from "./TodoType.ts";
import TodoItem from "./TodoItem.tsx";
import {createTodo, fetchTodos} from "../api/todoapi.ts";
import {todoInitialState, todoReducer} from "./todoReducer.ts";



const Todo = () =>{
    const [state, dispatch] = useReducer(todoReducer,todoInitialState)
    const {todos, error, loading } = state
    // const [todos, setTodos] = useState<TodoType[]>([]);
    // const [error, setError] = useState("");
    const [text, setText] = useState("");

    useEffect(() => {
        try{
            fetchTodos()
                .then(data => {
                    dispatch({type: "FETCH_TODOS", payload: data})
                })
        }catch {
            dispatch({type: "FAILED", payload: "Error Fetching Todos list"})
        }

    })

    const addTodo = async (event: any) => {
        event.preventDefault()
        const trimmed = text.trim()
        if (!trimmed) return
        const newTodo = {id: Date.now(), text: trimmed, completed: false }
        try {
            const saved = await createTodo(newTodo)
            dispatch({type: "ADD_TODO", payload: saved})
            // setTodos([...todos, { id: Date.now(), text: trimmed, completed: false }])
            setText("")
        }catch {
            dispatch({type: "FAILED", payload: "Error Adding Todos"})
        }
    }

    const toggleTodo = (id: number) => {
        // setTodos(todos.map((todo) =>
        //     todo.id === id ? { ...todo, completed: !todo.completed } : todo
        // ))
    }

    const completedCount = todos.filter((todo) => todo.completed).length

    return(
        <section className="todo">
            <form className="todo-form" onSubmit={addTodo}>
                <input
                    type="text"
                    placeholder="What needs to be done?"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
                <button type="submit">Add</button>
            </form>

            {todos.length === 0 ? (
                <p className="todo-empty">No todos yet. Add one above.</p>
            ) : (
                <>
                    <ul className="todo-list">
                        {todos.map((todo) => (
                            <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
                        ))}
                    </ul>
                    <p className="todo-summary">
                        {completedCount} of {todos.length} completed
                    </p>
                </>
            )}
        </section>
    )
}

export default Todo;