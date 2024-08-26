import { useState } from 'react';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  
  const [inputValue, setInputValue] = useState('');

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
      onNewCategory(inputValue) ? setInputValue('') : showAlert();
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

      <button onClick={() => onNewCategory(inputValue) ? setInputValue('') : showAlert()}>Agregar</button>
    </>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};