import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import store from "../../Images/7815.jpg"

const About = () => {
    return (
        <div className="mt-5 " id="about">
            <Container fluid className="mt-5">
 
  <Row>
    <Col xs={12} md={6}>
    <div className='w-3/4' >
                <h1 className='text-3xl font-bold'>MasterEd is the</h1>
                <h1 className='text-3xl font-bold'>Best choice for everyone</h1>
            </div>
    </Col>
    <Col xs={12} md={6} style={{ marginTop:"50px"}}>
    <div>
      <h5>Our main motives</h5>
      <div className="p-1">
      <p>A fully packed education course for everyone who wants to be good in online eLearning platforms, and deliver knowledge worldwide. It is a perfect education course that was designed to meet the needs of the learning industry.</p>
      </div>
    </div>
    </Col>
  </Row>
  </Container>

        </div>
    );
};

export default About;