import { useState } from 'react';
import { AddCategory as AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Demon Slayer', 'Blue Lock']);
  
  return (
    <>
      {/* Titulo de la app */}
      <h1>GifExpertApp</h1>

      {/* Input (componente independiente) */}
      <AddCategory listCategories={categories} setCategories={setCategories}/>
      {/* Listado de gifs */}
      <ol>
        {categories.map((category, index) => {
          return (<li key={index}>{category}</li>);
        })}
      </ol>
      
        {/* GifItem */}
    </>
  )
}
