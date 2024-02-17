import { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import TodoItemsContext from "../store/todoItemsStore";

function SingleItem({list}) {
  const {deleteItem} = useContext(TodoItemsContext)
  return ( 
    <>
      <div className="SingleTodoWrapper">
        <h2>{list}</h2>
        <button
        className="btn btn-danger"
        onClick={() => deleteItem(list)}
        >< TiDelete/></button>
      </div>
    </>
    
   );
}

export default SingleItem;