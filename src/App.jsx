import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Heading from './Components/heading';
import AddTodo from './Components/AddTodo';
import TodoWrapper from './Components/TodoWrapper';


function App() {

  let InitialstodoItems = ['Hello', 'Worlds'];
  
  const [todoItems, setTodoItems] = useState(InitialstodoItems);
  
  // On Add todo Button is Clicked
  let onSubmitButton = (value) => {
    const newValue = [...todoItems, value];
    setTodoItems(newValue);
  }

  // On Delete Button is Clicked
  let onDeleteButton = (value) => {
    let afterDeleteItems = todoItems.filter((items) => items !== value );
    setTodoItems(afterDeleteItems);
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
            <TodoWrapper onDeleteButton={onDeleteButton} todoItems={todoItems} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
