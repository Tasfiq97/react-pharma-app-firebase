import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import store from "../../Images/7815.jpg"

const About = () => {
    return (
        <div className="mt-5 ">
            <h1 className="fw-bolder fs-1 mb-5">About Us</h1>
            <Container fluid className="mt-5">
 
  <Row>
    <Col xs={12} md={6}>
      <div className="mt-5">
          <img className="img-fluid" src={store} alt="" />
      </div>
    </Col>
    <Col xs={6} md={6} style={{textAlign:"center", marginTop:"50px"}}>
    <div>
    <h3 className="text-dark fw-bolder">Welcome To Pharmaco-zone</h3>
      <h5>Our main motives</h5>
      <div className="p-3">
       <h3 style={{color:"gray",fontWeight:"bold"}}>Team of Professionals</h3>
       <p style={{color:"gray"}}>Allergy shots and immunotherapy body type cornea epidermis Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
      </div>
      <div className="p-4">
       <h3 style={{color:"gray",fontWeight:"bold"}}>Free Consultation</h3>
       <p style={{ color:"gray"}}>Allergy shots and immunotherapy body type cornea epidermis Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
      </div>
      <div className="p-4">
       <h3 style={{color:"gray",fontWeight:"bold"}}>Energy Help</h3>
       <p style={{ color:"gray"}}>Allergy shots and immunotherapy body type cornea epidermis Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
      </div>
    </div>
    </Col>
  </Row>
  </Container>

        </div>
    );
};

export default About;