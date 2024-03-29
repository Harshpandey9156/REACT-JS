import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState ={
    todos:[
        {
            id:1,text :"hello"
        }
    ]
}
export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            // state.todos.push(action.payload)
            const todo={
                id:nanoid(),
                name:action.payload
            }
            state.todos.push(todo)
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        toggleTodo:(state,action)=>{
            const todo=state.todos.find((todo)=>todo.id===action.payload)
            todo.completed=!todo.completed
        }
    }
})
export const {addTodo,deleteTodo,toggleTodo}=todoSlice.actions;
export default todoSlice.reducer
