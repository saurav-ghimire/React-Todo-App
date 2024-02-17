import React, { useState, useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Heading from './Components/heading';
import AddTodo from './Components/AddTodo';
import TodoWrapper from './Components/TodoWrapper';
import Welcome from './Components/Welcome';
// Context
import TodoItemsContext from './store/todoItemsStore';

const reducer = (currentTodo, action) => {
  let newTodos = currentTodo;
  if(action.type === 'NEW_ITEM'){
    
    newTodos = [...currentTodo, action.payload.itemName];
  
  }else if(action.type === 'DELETE_ITEM'){
    newTodos = currentTodo.filter((items) => items !== action.payload.itemName );
  }
  return newTodos;
}

function App() {

  let InitialstodoItems = ['Hello', 'World'];
  
  // const [todoItems, setTodoItems] = useState(InitialstodoItems);

  const [todoItems, dispatchTodoItems] = useReducer(reducer, InitialstodoItems)

  let onSubmitButton = (value) => {
    
    const newItemAction = {
      type: 'NEW_ITEM',
      payload: {
        itemName: value
      }
    }

    dispatchTodoItems(newItemAction)
    
  }


  // On Add todo Button is Clicked
  // let onSubmitButton = (value) => {
  //   const newValue = [...todoItems, value];
  //   setTodoItems(newValue);
  // }

  
  // On Delete Button is Clicked

  let onDeleteButton = (value) => {
    
    const deleteItemAction = {

      type : 'DELETE_ITEM',
      payload : {
        itemName : value
      }

    }

    dispatchTodoItems(deleteItemAction)
  }
  
  

  // let onDeleteButton = (value) => {
  //   let afterDeleteItems = todoItems.filter((items) => items !== value );
  //   setTodoItems(afterDeleteItems);
  // }
  
  const defaultTodo = [];
  return (
    <TodoItemsContext.Provider
    value={{
      todoItems: todoItems,
      addNewItem: onSubmitButton,
      deleteItem: onDeleteButton
    }}
    >
    <>
      <div className="container">
        <div className='todoWrapper'>
          <div className="title">
            <Heading />
          </div>
          {/* Context API is Called in this Component */}
          <div className='AddTodoForm'>
            <AddTodo />
          </div>
          {/* Context API Value is Called in this Component */}
          <Welcome/>

          {/* Context API Value is Called in this Component */}
          <div className='TodoWrapper'>
            <TodoWrapper />
          </div>
        </div>
      </div>
    </>
    </TodoItemsContext.Provider>
  )
}

export default App
