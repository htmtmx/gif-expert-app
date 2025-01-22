import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import "./AddCategory.css";
import { GifItem } from './GifItem';
import { getGifs } from '../helpers/getGifs';

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