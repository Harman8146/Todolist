import { createContext, useContext } from "react";

export const todocontext = createContext({
    todos: [
        {
            id:1,
            todo:"todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    togglecompelete: (id) => {}
})

export const useTodo = () =>{
    return useContext(todocontext)
}

export const Todoproivder = todocontext.Provider