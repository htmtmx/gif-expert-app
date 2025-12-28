import { useCallback, useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onNewCategory = useCallback((rawCategory) => {
        const newCategory = rawCategory.trim();
        if (newCategory.length <= 1) return;

        setCategories((prevCategories) => {
            if (prevCategories.includes(newCategory)) return prevCategories;
            return [newCategory, ...prevCategories];
        });
    }, []);

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
