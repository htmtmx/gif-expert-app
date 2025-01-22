import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

import "./AddCategory.css";

export const GifGrid = ({ category }) => {
    const [gifs, setGifs] = useState([]);
    
    useEffect(() => {
        getGifs(category).then(data=> setGifs(data));
    }, []);
    
    return (
        <section>
            <h3>{category}</h3>
            <div className='container_gifs'>
                {
                    gifs.map(({ title, images }) =>
                        <GifItem key={title + Math.floor(Math.random() * 10).toString()} title={title} url={ images.original.url} />
                    )
                }
            </div>
        </section>
  )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}