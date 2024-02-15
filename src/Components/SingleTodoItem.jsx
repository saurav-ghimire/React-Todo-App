function SingleItem({list, onDeleteButton}) {
  
  return ( 
    <>
      <div className="SingleTodoWrapper">
        <h2>{list}</h2>
        <button
        className="btn btn-danger"
        onClick={() => onDeleteButton(list)}
        >Delete</button>
      </div>
    </>
    
   );
}

export default SingleItem;