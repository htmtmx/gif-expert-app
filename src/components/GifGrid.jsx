import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

import "./AddCategory.css";

export const GifGrid = ({ category }) => {
    const [gifs, setGifs] = useState([]);
    const getImages = async () => {
        const gifList = await getGifs(category);
        setGifs(gifList);
    }
    
    useEffect(() => {
        getImages();
    }, []);
    
    return (
        <section>
            <h3>{category}</h3>
            <div className='container_gifs'>
                {
                    gifs.map((image) =>
                        <GifItem key={image.id} {...image} />
                    )
                }
            </div>
        </section>
  )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}