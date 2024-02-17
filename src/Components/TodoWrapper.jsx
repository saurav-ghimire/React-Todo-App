import SingleItem from "./SingleTodoItem";
import TodoItemsContext from "../store/todoItemsStore";
import { useContext } from "react";

function TodoWrapper() {
  const {todoItems, deleteButton} = useContext(TodoItemsContext)
  
  return ( 
    
    <>
    {
     todoItems.map((data) => (
      <SingleItem key={data} list={data} onDeleteButton={deleteButton} />
     ))
    }
    </>
   );
}

export default TodoWrapper;