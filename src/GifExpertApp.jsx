import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Demon Slayer', 'Blue Lock']);

    const onNewCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories(prevCategories => [newCategory, ...prevCategories]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={onNewCategory}
            />

            {categories.map((category) =>
                <GifGrid key={category} category={ category} />
            )}

        </>
    )
}
