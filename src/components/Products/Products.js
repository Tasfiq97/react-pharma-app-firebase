import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useProduct from '../../Hooks/useProduct';
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = () => {
    const [products]=useProduct([])
   
    return (
        <div className="mt-5" id="products">
            <h1 className="fs-1 fw-bolder text-center">Our Products</h1>
            <Container>
            <Row xs={1} md={3} className="g-2 mt-5">
   
        {
            products.map(product=><SingleProduct
            key={product.id}
            product={product}
            
            />)
        }
   
  
</Row>
</Container>
        </div>
    );
};

export default Products;