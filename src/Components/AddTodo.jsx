import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

function AddTodo({onSubmitButton}) {

  let [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value)
  }


  const onButtonClick = (value) => {
    if(value){
      onSubmitButton(value);
      setInputValue("")
    }else{
      alert('Field Cannot be Empty');
      return false;
    }
  }

  
  return ( 
    <>
      <input type="text"
      placeholder="Enter Your Todo Here"
      onChange={handleInput}
      value={inputValue}
      className="searchField"
      />
      <button
      className="addButton"
      onClick={() => onButtonClick(inputValue)}
      ><IoAddCircleOutline />
      </button>
    </>
   );
}

export default AddTodo;