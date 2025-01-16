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

    const onChange = (e) => {
        setInputValue(e.target.value);
    };

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (inputValue.trim().length <= 1) return;
            onNewCategory(inputValue.trim());
            setInputValue('');
        }
    };

    return (
        <>
            <input
                type="text"
                value={inputValue}
                placeholder="Buscar gifs"
                onChange={onChange}
                onKeyDown={onKeyDown}
                required
            />

            <button onClick={() => {
                onNewCategory(inputValue)
                setInputValue('')
            }}>Agregar</button>
        </>
    );
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
};