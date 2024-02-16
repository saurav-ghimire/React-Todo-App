import { TiDelete } from "react-icons/ti";

function SingleItem({list, onDeleteButton}) {
  
  return ( 
    <>
      <div className="SingleTodoWrapper">
        <h2>{list}</h2>
        <button
        className="btn btn-danger"
        onClick={() => onDeleteButton(list)}
        >< TiDelete/></button>
      </div>
    </>
    
   );
}

export default SingleItem;