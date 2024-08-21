import React from 'react';
import { useState } from 'react';

export const InputNewCategory = ({ listCategories, setCategories }) => {
  
  const onAddCategory = (newCategory) => {
    if (!listCategories.includes(newValue) && newCategory.length >=4) {
      setCategories([...listCategories, newCategory]);
    } else {
      alert('Ese elemento ya existe en la lista');
    }
  };

  const [newValue, setNewValue] = useState('');

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
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        required
      />
      <button onClick={() => onAddCategory(newValue)}>Agregar</button>
    </>
  )
}
