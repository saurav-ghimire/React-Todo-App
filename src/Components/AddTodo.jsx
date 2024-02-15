import { useState } from "react";

function AddTodo({onSubmitButton}) {

  let [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value)
  }

  const onButtonClick = (value) => {
    onSubmitButton(value);
    setInputValue("")
  }

  
  return ( 
    <>
      <input type="text"
      placeholder="Enter Your Todo Here"
      onChange={handleInput}
      value={inputValue}
      />
      <button onClick={() => onButtonClick(inputValue)}>Add your Todo</button>
    </>
   );
}

export default AddTodo;