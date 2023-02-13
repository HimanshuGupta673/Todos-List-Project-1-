import React from 'react'
const TodoItems = (props) => {
  return (
    <div className='my-4' style={{height:"20vh"}}>      
      <h4>{props.todo.Sno}. Title:{props.todo.title}</h4>
      <p>Description:{props.todo.description}</p>
      <button className='btn btn-outline-danger btn-sm' onClick={props.onDelete}>delete</button>
      <hr />
    </div>
  )
}

export default TodoItems
