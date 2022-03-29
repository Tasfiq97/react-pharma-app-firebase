import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import education from "../../Images/banner2.jpg"
const Banner = () => {
    return (
        <div >
            <Container fluid style={{backgroundColor:"#c5e7ee"}}>
  <Row>
    <Col xs={12} md={5}>
    <div className="p-5">
        <img  className="img-fluid" src={education} alt="" />
    </div>
    </Col>
    <Col xs={12} md={5} className="d-flex justify-content-center align-items-center">
    <div className="mt-3 mb-3">
    <h1>The Most</h1>
          <h1>Progressive</h1>
          <h1>eduction course website</h1>
         <HashLink to="/home#products">
         <Button variant="info">Show products</Button>
         </HashLink>
    </div>
    </Col>
  </Row>
  </Container>
        </div>
    );
};

export default Banner;