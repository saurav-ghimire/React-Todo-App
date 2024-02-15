import SingleItem from "./SingleTodoItem";


function TodoWrapper({todoItems, onDeleteButton}) {
  return ( 
    <>
    {
     todoItems.map((data) => (
      <SingleItem key={data} list={data} onDeleteButton={onDeleteButton} />
     ))
    }
    </>
   );
}

export default TodoWrapper;