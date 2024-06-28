import { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Demon Slayer']);
  
  return (
    <>
      {/* Titulo de la app */}
      <h1>GifExpertApp</h1>

      <ol>
        <li>123</li>
        <li>abc</li>
        <li>xyz</li>
        {categories.map((categorie, index) => {
          return (<li key={index}>{categorie}</li>);
        })}
      </ol>
      {/* Input (componente independiente) */}

      {/* Listado de gifs */}
        {/* GifItem */}
    </>
  )
}
