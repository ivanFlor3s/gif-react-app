import React, { useState } from "react";
import PropTypes from 'prop-types'


export const AddCategory = ({addGifHandler}) => {
  const [inputValue, setInputValue] = useState("");

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
      e.preventDefault()

      addGifHandler((categorias = []) => {
          if(inputValue.trim().length < 3){
              return [...categorias]
          }
          else if(!categorias.includes(inputValue)){
            setInputValue('')
            return [...categorias,inputValue]
          }
          else{
              console.error('Ya se agrego la categoria', inputValue)
              return [...categorias]
          }
        })
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

AddCategory.propTypes = {
    addGifHandler: PropTypes.func.isRequired
}