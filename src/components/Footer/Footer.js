import { faCalculator, faHome, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div style={{marginTop:"70px"}}>
            <Container fluid style={{backgroundColor:"#c5e7ee"}}>
  <Row xs={1} md={1} lg={3} className=" ">
    <Col>
    <h3 className="fs-3 fw-bolder mt-5">About Us</h3>
    <p>Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac, consequat velit. Quisquemos sodales suscipit tortor ditaemcos condimentum lacus meleifend.</p>
    </Col>
    <Col>
    <div className="featured-content">                                         
    <h1  className='mt-5'>Pages</h1>
                    <li>blog</li>
                    <li>home</li>
                    <li>Sample</li>
                    <li>shortcodes</li>
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
       <p className="fw-bold text-center">&copy; All rights reserved 2022</p>
   </div>
</Container>
        </div>
    );
};

export default Footer;