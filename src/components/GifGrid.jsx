import PropTypes from 'prop-types'

export const GifGrid = ({ category }) => {
    
  return (
      <div>{category}</div>
  )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}