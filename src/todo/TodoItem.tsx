import type {TodoType} from "./TodoType.ts";

type TodoItemProps = {
    todo: TodoType
    onToggle: (id: number) => void
}

const  TodoItem= ({todo, onToggle}:TodoItemProps) => {
    return (
        <li className={todo.completed ? "completed" : "todo-item"}>
            <label>
                <input type="checkbox"
                       checked={todo.completed}
                       onChange={()=> onToggle(todo.id)}
                />
                <span>{todo.text}</span>
            </label>
        </li>
    )
}

export default TodoItem