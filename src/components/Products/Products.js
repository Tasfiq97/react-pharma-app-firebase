import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import useProduct from '../../Hooks/useProduct';
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = () => {
    const [products]=useProduct([])
    console.log(products)
    return (
        <div className="mt-5">
            <h1 className="fs-1 fw-bolderf">Our Products</h1>
            <Row xs={1} md={3} className="g-4 mt-5">
   
        {
            products.map(product=><SingleProduct
            key={product.id}
            product={product}
            
            />)
        }
   
  
</Row>
        </div>
    );
};

export default Products;