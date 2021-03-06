import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import {Link} from 'react-router-dom'

//product comes as props
const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded' style={{height:"95%"}}>
       <Link to={`/product/${product._id}`}>   {/*props.product._id but we destructure in function argumet */}
        <Card.Img src={product.image} variant='top' style={{width: "100%", height: "15vw",objectFit:" cover"}} />
      </Link>

      <Card.Body >
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating value={product.rating}  text={` ${product.numReviews} reviews`}   />
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product