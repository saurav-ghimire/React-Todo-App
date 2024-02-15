import { useState } from "react";

function AddTodo({onSubmitButton}) {

  let [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value)
  }

  const onButtonClick = (value) => {
    onSubmitButton(value);
  }

  
  return ( 
    <>
      <input type="text"
      placeholder="Enter Your Todo Here"
      onChange={handleInput}
      />
      <button onClick={() => onButtonClick(inputValue)}>Add your Todo</button>
    </>
   );
}

export default AddTodo;