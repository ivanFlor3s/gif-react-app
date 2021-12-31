import React, { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("");

  const changeHandler = (e) => {
    setInputValue(e.target.value);
    console.log('cambio valor',e.target.value)
  };

  const handleSubmit = (e) => {
      e.preventDefault()
      console.log('Submit hecho')
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>Nueva categoria </label>
      <input
        className="inputCategoria"
        type="text"
        value={inputValue}
        onChange={changeHandler}
        placeholder="Ingrese una categoria"
      />
    </form>
  );
};
