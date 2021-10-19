import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import doctor1 from "../../Images/team (1).jpg"
import doctor2 from "../../Images/team (2).jpg"
import doctor3 from "../../Images/team (4).jpg"
const Doctors = () => {
    return (
        <div style={{marginTop:"100px"}}>
            <h1 className="fs-1 fw-bolder">Our Doctors</h1>
            <Row xs={1} md={3} className="g-3 p-4">
 
    <Col>
      <Card>
        <Card.Img variant="top" src={doctor1} />
        <Card.Body>
          <Card.Title>Dr.Hary Bastick</Card.Title>
          <Card.Text>
           Family Physicist
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src={doctor2} />
        <Card.Body>
          <Card.Title>Dr. Laro Miran</Card.Title>
          <Card.Text>
          Family Physicist
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src={doctor3} />
        <Card.Body>
          <Card.Title>Dr. Saga Norén</Card.Title>
          <Card.Text>
            family physicist
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

</Row>
        </div>
    );
};

export default Doctors;