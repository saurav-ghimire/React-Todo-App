import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Heading from './Components/heading';
import AddTodo from './Components/AddTodo';
import TodoWrapper from './Components/TodoWrapper';


function App() {

  let todoItems = ['Hello', 'Worlds'];


  return (
    <>
      <div className="container">
        <div className='todoWrapper'>
          <div className="title">
            <Heading />
          </div>
          <div className='AddTodoForm'>
            <AddTodo />
          </div>
          <div className='TodoWrapper'>
            <TodoWrapper todoItems={todoItems} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
