import React from 'react';
import { useState } from 'react';

export const AddCategory = ({ listCategories, setCategories }) => {
  
  const [inputValue, setNewValue] = useState('');

  const onAddCategory = (newCategory) => {
    if (!listCategories.includes(inputValue) && newCategory.length >=4) {
      setCategories([newCategory, ...listCategories]);
    } else {
      alert('Ese elemento ya existe en la lista');
    }
  };

  const handleChange = (e) => {
    setNewValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onAddCategory(inputValue);
    }
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        placeholder="Buscar gifs"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        required
      />
      <button onClick={() => onAddCategory(inputValue)}>Agregar</button>
    </>
  )
}
