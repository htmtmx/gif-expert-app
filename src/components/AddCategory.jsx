import React from 'react';
import { useState } from 'react';

export const AddCategory = ({ listCategories, setCategories }) => {
  
  const [newValue, setNewValue] = useState('');

  const onAddCategory = (newCategory) => {
    if (!listCategories.includes(newValue) && newCategory.length >=4) {
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
      onAddCategory(newValue);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder='Buscar'
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        required
      />
      <button onClick={() => onAddCategory(newValue)}>Agregar</button>
    </>
  )
}
