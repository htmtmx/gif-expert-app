import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Demon Slayer', 'Blue Lock']);
  
  const onNewCategory = (inputValue) => {
    if (!categories.includes(inputValue) && inputValue.trim().length >= 4) {
      setCategories(prevCategories => [inputValue, ...prevCategories]);
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      {/* Titulo de la app */}
      <h1>GifExpertApp</h1>

      {/* Input (componente independiente) */}
      <AddCategory
        onNewCategory={inputValue => onNewCategory(inputValue)}
      />

      {/* Listado de gifs */}
      <ol>
        {categories.map((category, index) => {
          return (<li key={index}>{category}</li>);
        })}
      </ol>
      
      {/* #TODO: GifItem */}
    </>
  )
}
