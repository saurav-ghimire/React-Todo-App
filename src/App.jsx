import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Heading from './Components/heading';
import AddTodo from './Components/AddTodo';
import TodoWrapper from './Components/TodoWrapper';


function App() {

  let InitialstodoItems = ['Hello', 'Worlds'];
  
  const [todoItems, setTodoItems] = useState(InitialstodoItems)
  
  let onSubmitButton = (value) => {
    const newValue = [...todoItems, value]
    setTodoItems(newValue)
  }
  
  return (
    <>
      <div className="container">
        <div className='todoWrapper'>
          <div className="title">
            <Heading />
          </div>
          <div className='AddTodoForm'>
            <AddTodo onSubmitButton={onSubmitButton} />
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
