import { useState } from 'react';
import { InputNewCategory } from './InputNewCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Demon Slayer', 'Blue Lock']);
  
  return (
    <>
      {/* Titulo de la app */}
      <h1>GifExpertApp</h1>

      <ol>
        {categories.map((category, index) => {
          return (<li key={index}>{category}</li>);
        })}
      </ol>
      {/* Input (componente independiente) */}
      <InputNewCategory listCategories={categories} setCategories={setCategories}/>
      {/* Listado de gifs */}
      
        {/* GifItem */}
    </>
  )
}
