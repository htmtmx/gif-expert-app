import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import "./AddCategory.css";
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
    const [gifs, setGifs] = useState([]);
    
    useEffect(() => {
        const getGifs = async ({category}) => {
            const url = `https://api.giphy.com/v1/gifs/search?api_key=1Vhwzebz7ptWEc2U7znMfG8LD1E5wFMh&q=${category}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
            const resp = await fetch(url);
            const { data } = await resp.json();
            setGifs(data);
        }
        getGifs(category);
    }, []);
    
    
    return (
        <section>
            <h3>{category}</h3>
            <div className='container_gifs'>
                {
                    gifs.map(({ title, images }) =>
                        <GifItem key={title} title={title} url={ images.original.url} />
                    )
                }
            </div>
        </section>
  )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}