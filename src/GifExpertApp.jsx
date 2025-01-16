import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Demon Slayer', 'Blue Lock']);

    const onNewCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories(prevCategories => [newCategory, ...prevCategories]);
    };

    return (
        <>
            {/* Titulo de la app */}
            <h1>GifExpertApp</h1>

            {/* Input (componente independiente) */}
            <AddCategory
                onNewCategory={onNewCategory}
            />

            {/* Listado de gifs */}
            <ol>
                {categories.map((category) => {
                    return (<li key={category}>{category}</li>);
                })}
            </ol>

            {/* #TODO: GifItem */}
        </>
    )
}
