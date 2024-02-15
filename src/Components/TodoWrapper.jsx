import SingleItem from "./SingleTodoItem";


function TodoWrapper({todoItems}) {
  return ( 
    <>
    {
     todoItems.map((data) => (
      <SingleItem key={data} list={data}  />
     ))
    }
    </>
   );
}

export default TodoWrapper;