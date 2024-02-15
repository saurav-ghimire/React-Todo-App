import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Heading from './Components/heading';
import AddTodo from './Components/AddTodo';


function App() {

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
        </div>
      </div>
    </>
  )
}

export default App
