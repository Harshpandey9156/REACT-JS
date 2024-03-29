import React from 'react'
import {useDispatch,useSelector}from 'react-redux'

import { deleteTodo } from '../feature/todo/todoSlice'


function addTodos() {
  const todos=useSelector(state=>state.todos)

  return (
    <>
    <div>Todos</div>
    {todos.map((todo)=>(
        <div key={todo.id}>
            {todo.text}
            <button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>
        </div>
    ))}
    </>
  )
 }

export default   addTodos;