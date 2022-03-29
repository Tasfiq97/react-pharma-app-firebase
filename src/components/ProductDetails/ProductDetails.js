import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useProduct from '../../Hooks/useProduct';

const ProductDetails = () => {
    const {productId}=useParams();
    console.log(productId)
    const [products]=useProduct([])
    console.log(products)
   
    const selectedProduct=products.find(product=>product.id==productId) ||{}
    console.log(selectedProduct);const {name,img,description,price}=selectedProduct;

    return (
        <div>
           <Container fluid className="mt-5 mb-5">
  <Row xs={1} md={2} >
    <Col className="d-flex justify-content-center align-items-center p-3">
     <div>
     <h1>{name}</h1>
      <p className="mt-5">{description}</p>
      <h3> price:  $ {price}</h3>
      <Link to="/delivery">
      <Button variant="info">Enroll this course</Button>
      </Link>
     </div>
    </Col>

    <Col>
    <div>
        <img className="img-fluid" src={img} alt="" />
    </div>
    </Col>
  </Row>
  </Container>
        </div>
    );
};

export default ProductDetails;