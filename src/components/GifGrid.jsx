import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types'

import "./AddCategory.css";

export const GifGrid = ({ category }) => {

    const { gifs, isLoading } = useFetchGifs(category);
    
    return (
        isLoading ? <h3>Loading...</h3> :
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