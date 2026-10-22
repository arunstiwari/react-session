import { useState} from "react";
import type {TodoType} from "./TodoType.ts";
import TodoItem from "./TodoItem.tsx";



const Todo = () =>{
    const [todos, setTodos] = useState<TodoType[]>([]);
    const [text, setText] = useState("");

    const addTodo = (event: any) => {
        event.preventDefault()
        const trimmed = text.trim()
        if (!trimmed) return

        setTodos([...todos, { id: Date.now(), text: trimmed, completed: false }])
        setText("")
    }

    const toggleTodo = (id: number) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ))
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