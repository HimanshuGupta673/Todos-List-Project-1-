import React from 'react'
import { useState } from 'react'

const AddTodos = (props) => {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("title or description cannot be empty")
        }else{
        props.addTodo(title,desc);
        setDesc("");
        setTitle("");
    }
  }
  return (
    <div>
      <>
        <form onSubmit={submit} className="container">
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Todos Title</label>
                <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="title" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Todos Description</label>
                <input type="text" className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="desc"/>
            </div>
            <button type="submit" className="btn btn-success">Add a Todo</button>
        </form>
      </>
    </div>
  )
}

export default AddTodos
