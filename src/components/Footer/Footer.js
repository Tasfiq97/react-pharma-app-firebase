import { faCalculator, faHome, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div style={{marginTop:"70px"}}>
            <Container fluid style={{backgroundColor:"#c5e7ee"}}>
  <Row xs={1} md={1} lg={3} className="pr-3 pl-3">
    <Col>
    <h3 className="fs-3 fw-bolder mt-5">About Us</h3>
    <p>Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac, consequat velit. Quisquemos sodales suscipit tortor ditaemcos condimentum lacus meleifend.</p>
    <h2>Pharmaco-Zone</h2>
    </Col>
    <Col>
    <h2 className="fs-3 fw-bolder mt-5">Openning Hours</h2>
    <div className="featured-content">                                         
                <span>Friday</span>  <span>-------</span> <span>9:00 - 22:00</span>
              </div>
              <div className="featured-content">                                         
                <span>Saturday</span>  <span>-------</span> <span>9:00 - 22:00</span>
              </div>
              <div className="featured-content">                                         
                <span>Sunday</span>  <span>-------</span> <span>9:00 - 22:00</span>
              </div>
              <div className="featured-content">                                         
                <span>Monday</span>  <span>-------</span> <span>9:00 - 22:00</span>
              </div>
              <div className="featured-content">                                         
                <span>Tuesday</span>  <span>-------</span> <span>9:00 - 22:00</span>
              </div>
              <div className="featured-content">                                         
                <span>Wednesday</span>  <span>-------</span> <span>9:00 - 22:00</span>
              </div>
              <div className="featured-content">                                         
                <span>Thursday</span>  <span>-------</span> <span>9:00 - 22:00</span>
              </div>
    </Col>
    <Col>
    <h2 className="fs-3 fw-bolder mt-5">Contact Us</h2>
    <p> <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>  Dhaka,Bangladesh</p>
    <p> <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>  +8801876277211</p>
    <p> <FontAwesomeIcon icon={faVoicemail}></FontAwesomeIcon>  support @email.com</p>
    <InputGroup className="mb-3">
    <FormControl
      placeholder="enter email"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
   <Button variant="info">subscribe</Button>
  </InputGroup>
    </Col>
  </Row>
   <div className="p-2 mt-4">
       <h5 className="fw-bold">&copy; All rights reserved 2021</h5>
   </div>
</Container>
        </div>
    );
};

export default Footer;