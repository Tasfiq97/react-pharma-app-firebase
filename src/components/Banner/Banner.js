import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import doctor from "../../Images/banner-removebg-preview.png"
const Banner = () => {
    return (
        <div >
            <Container fluid style={{backgroundColor:"#c5e7ee"}}>
  <Row>
    <Col xs={12} md={5}>
    <div className="p-5">
        <img  className="img-fluid" src={doctor} alt="" />
    </div>
    </Col>
    <Col xs={12} md={5} className="d-flex justify-content-center align-items-center">
    <div className="mt-3 mb-3">
         <h1 className="fw-bold"> Doctor's Prescribe</h1>
         <h5>You can get Our Medicines upto 15% off only</h5>
         <p>please visit us For more details</p>
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