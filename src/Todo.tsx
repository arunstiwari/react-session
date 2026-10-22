import {useState} from "react";

const Todo = () =>{
    const [todos, setTodos] = useState<string[]>([]);
    const [text, setText] = useState("");

    const addTodo = () => {
        setTodos([...todos, text]);
        setText("");
    }

    return(
        <>
        <div>
            <label>Item:</label>
            <input type="text" value={text}
                   onChange={(event) => setText(event.target.value) }>
            </input>
            <button onClick={() => addTodo()}>Add</button>
        </div>
            <div>
                <h1> All Todos: </h1>
                {todos.map(todo => (
                    <h3>{todo}</h3>
                ))}
            </div>
        </>
    )
}

export default Todo;