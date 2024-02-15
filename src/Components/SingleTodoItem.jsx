function SingleItem({list}) {
  return ( 
    
    <>
      <div className="SingleTodoWrapper">
        <h2>{list}</h2>
        <button className="btn btn-danger">Delete</button>
      </div>
    </>
    
   );
}

export default SingleItem;