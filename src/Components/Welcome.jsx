import { useContext } from "react"
import TodoItemsContext from "../store/todoItemsStore"


function Welcome() {
  const contextObj = useContext(TodoItemsContext)
  const todoItems = contextObj.todoItems;

  return <div className="emptyMessage">
      {todoItems.length === 0 && <p>Your List is Empty</p>}
    </div>
  
}

export default Welcome