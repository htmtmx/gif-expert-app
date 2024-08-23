import { useState } from 'react';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const onAddCategory = (inputValue) => {
    setCategories(categories => {
      if (!categories.includes(inputValue) && inputValue.trim().length >= 4) {
        return [inputValue, ...categories];
      } else {
        showAlert();
        return [...categories];
      }
    });
    setInputValue('');
  };

  const showAlert = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Ya existe ese elemento!',
    });
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Evitar que se ejecute automáticamente la función onAddCategory
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
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};