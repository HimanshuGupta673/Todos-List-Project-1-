// import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Todos from './Components/Todos';
import React, { useState, useEffect } from 'react';
import AddTodos from './Components/AddTodos';
// import About from './Components/About';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
  let initTodo;
  // localStorage.getItem("todos")  --> it return's null
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    settodos(todos.filter((e) => {
      return e !== todo
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }


  const addTodo = (title, desc) => {
    // let Sno=todos[todos.length-1].Sno+1;
    let Sno;
    if (todos.length === 0) {
      Sno = 1
    } else {
      Sno = todos[todos.length - 1].Sno + 1
    }
    const mytodo = {
      Sno: Sno,
      title: title,
      description: desc,
    }

    settodos([...todos, mytodo]);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const [todos, settodos] = useState(initTodo)


  //*** */ when we call settodos then it does not make immediate change in todos that's why it does not reflect in the output so we need to use useEffect
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <>
          <React.Fragment>
      <Router>
        <Header title="MyTodosList" searchBar={true} />
        <Routes>
            
        
        <Route path="/" element={
          <React.Fragment>
            <AddTodos addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </React.Fragment>
        }/>
        {/* <Route path="/" render={() => {
          <React.Fragment>
          return (
            <>
            <div className="container">
            <AddTodos addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
            </div>
            </>
            )
            </React.Fragment>
          }}/> */}

        {/* <Route path="/ about" element={ <About />}/> */}
         
        {/* </Route> */}

        </Routes>
        <Footer todos={todos} />
      </Router>
          </React.Fragment>
    </>
  );
}

export default App;
