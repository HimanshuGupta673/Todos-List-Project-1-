import React from 'react'
import TodoItems from './TodoItems'
const Todos = (props) => {
  return (
    <>
    <h4 className='my-4 container'>Todos List</h4>
    <div className='container'>
        {props.todos.length===0?"No list to show":
        props.todos.map((todo)=>{
            return <TodoItems key={todo.Sno} todo={todo} onDelete={()=>{props.onDelete(todo)}}/>
        })
      }
    </div>
    </>
  )
}

export default Todos
