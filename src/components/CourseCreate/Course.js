import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import course from "../../Images/Course.jpg"
const Course = () => {
    return (
        <div style={{marginTop:"100px"}}>
            <h1 className="fs-1 fw-bolder text-center">Course Creation</h1>
            <Row xs={1} md={1} className="g-2 p-2 mt-5 mb-5">
 
    <Col>
      <Card style={{border:"none"}}>
        <Card.Img variant="top" style={{width:"50%"}} src={course} />
        <Card.Body>
          <Card.Title>Course Creation</Card.Title>
          <Card.Text style={{color:"gray"}}>
          It has never been easier! No need to type any line of code. Building courses is as easy as breathing if you have a magic Front-end course builder. Super convenient and transparent builder, visual composer plugin and functional drag and drop tools - everything at hand to make it as easy as possible
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    

</Row>
        </div>
    );
};

export default Course;