import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';
import Rating from 'react-rating';
import {  faStar } from '@fortawesome/free-solid-svg-icons'

const SingleProduct = ({product}) => {
    const {name,img,description}=product
    return (
        <div>
             <Col>
             <Container>
            <Card  style={{backgroundColor:"#c5e7ee",padding:"20px"}}>
                <div className="text-center">
        <Card.Img className="img-fluid w-50" variant="top" src={img} />
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {
                description.slice(0,150)
            }
          </Card.Text>
          <Card.Text>
          <Rating
  placeholderRating={3}
  emptySymbol={<FontAwesomeIcon icon={faStar} />}
  placeholderSymbol={<FontAwesomeIcon icon={faStar}   />}
  fullSymbol={<FontAwesomeIcon icon={faStar} />}
/>
          </Card.Text>
          <Button variant="info">View Details</Button>
        </Card.Body>
      </Card>
      </Container>
      </Col>
        </div>
    );
};

export default SingleProduct;