import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import orderDone from "../../Images/3333449.jpg"
const OrderDone = () => {
    return (
        <div>
            <Container className="mt-5">
                <h1>Thank You For Your Order!!!</h1>
  <Row>
    <Col xs={12} md={6}>
    <Card className="mt-5">
  <Card.Body>
    <Card.Title>Your Order done</Card.Title>
 
    <Card.Text>
     please wait for the items that you ordered.we will inform you when product arrives
    </Card.Text>
    <Link to="/home">
     <Button variant="dark">Go back</Button>
     </Link>
  </Card.Body>
</Card>
    </Col>
    <Col xs={12} md={6}>
      <div>
        <img className="img-fluid" src={orderDone} alt="" />
      </div>
    </Col>
    </Row>
    </Container>
        </div>
    );
};

export default OrderDone;