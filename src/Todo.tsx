import {useState} from "react";

const Todo = () =>{
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");

    return(
        <>
        <div>
            <label>Item:</label>
            <input type="text" value={text} onChange={(event) => setText(event.target.value) }></input>
            <button onClick={() => setTodos([...todos, text])}>Add</button>
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