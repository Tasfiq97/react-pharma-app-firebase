import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import orderDone from "../../Images/3333449.jpg"
const OrderDone = () => {
    return (
        <div>
            <Container className="mt-5">
                <h1>Thank You For Your Enrollment!!!</h1>
  <Row>
    <Col xs={12} md={6}>
    <Card className="mt-5">
  <Card.Body>
    <Card.Title>Your enroll done</Card.Title>
 
    <Card.Text>
     please wait for the next instruction.we will inform you.
    </Card.Text>
    <Link to="/home">
     <Button variant="dark">Go back</Button>
     </Link>
  </Card.Body>
</Card>
    </Col>
    
    </Row>
    </Container>
        </div>
    );
};

export default OrderDone;