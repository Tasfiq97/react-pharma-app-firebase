import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
const Menubar = () => {
    return (
        <div>
           <Navbar sticky="top" collapseOnSelect expand="lg" bg="info" variant="dark">
  <Container fluid>
  <Navbar.Brand style={{fontFamily:'Roboto, sans-serif'}} className="text-dark fs-2 fw-bold" href="#home">Pharmaco-Zone</Navbar.Brand>
  <Navbar.Toggle className="text-dark fw-bold"  aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse  id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link className="text-dark fw-bold fs-5 me-5" href="#features">Home</Nav.Link>
      <Nav.Link className="text-dark fw-bold fs-5 me-5" href="#pricing">About Us</Nav.Link>
      <Nav.Link className="text-dark fw-bold fs-5 me-5 " href="#deets">Log In</Nav.Link>
      <Nav.Link className="text-dark fw-bold fs-5 me-5" href="#deets">Sign In</Nav.Link>
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Menubar;