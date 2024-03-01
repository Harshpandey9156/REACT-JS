import { createContext,useContext } from "react";


export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"Todo msge",
            completed: false
        }
    ],
    addtodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo: (todo)=>{},
    toggle: (todo)=>{}
})

export const useTodo=()=>{
    return useContext(TodoContext)
}

export const Todoprovider=TodoContext.Provider

