import React from 'react'
import PropTypes from 'prop-types'

const Rating = ({ value, text, color }) => {
  return (
    <div className='rating' >
    <span style={{color}}>
       { [1, 2, 3, 4, 5].map(index =>
                (<i className={ (value >= index) ? 'fas fa-star' : ((value >= (index - 0.5)) ? 'fas fa-star-half-alt' : 'far fa-star')}></i>        )) }
    </span>
      <span>{text && text}</span>{/* if text then show it  or->  text?text:'' */}
    </div>
  )
}

Rating.defaultProps = {  // this is the properties of a default prop
  color: '#f8e825',
}


export default Rating

