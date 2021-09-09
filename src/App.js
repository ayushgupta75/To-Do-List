import './App.css';
import Header from './MyComponents/header';
import Todos from './MyComponents/todos';
// import React, {useState} from 'react';
import AddTodo from './MyComponents/AddTodo';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './MyComponents/About';


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am on Delete")
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

  }



  const addTodo = (Title, Desc) => {
    console.log(Title, Desc)
    let sno = todos.length + 1;
    const mytodo = {
      sno: sno,
      title: Title,
      desc: Desc
    }
    setTodos([...todos, mytodo])
    console.log(mytodo)
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])
  return (

    <>
      <Router>
        <Header title="My Todos List" searchbar={true} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>

          <Route excat path="/about" >
            <About />
          </Route>
         </Switch>
         
      </Router>
    </>
  );
}

export default App;
