import SingleItem from "./SingleTodoItem";


function TodoWrapper({todoItems}) {
  return ( 
    <>
    {
     todoItems.map((data) => (
      <SingleItem list={data}  />
     ))
    }
    </>
   );
}

export default TodoWrapper;