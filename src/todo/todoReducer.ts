
//1. Create Generic TodoState type

import type {TodoType} from "./TodoType.ts";

export type TodoState = {
   todos: TodoType[]
    loading: boolean
    error: string | null
}

//2. Initial State
export const  todoInitialState: TodoState = {
    todos: [],
    loading: true,
    error: null
}

//3. Create Action
export type TodoAction =
    | { type: "FETCH_TODOS", payload: TodoType[] }
    | { type: "ADD_TODO", payload: TodoType }
    | { type: "UPDATE_TODO", payload: TodoType }
    | { type: "FAILED", payload: string | null }


//3. Create Reducer

export const todoReducer = (state = todoInitialState, action: TodoAction) => {
    switch (action.type) {
        case "FETCH_TODOS":
            return {
                ...state, todos: action.payload, loading: false, error: null
            }
        case "ADD_TODO":
            return {
                ...state, todos: [...state.todos, action.payload]
            }
        case "UPDATE_TODO":
            return {
                ...state, todos: [...state.todos, action.payload]
            }
        case "FAILED":
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}