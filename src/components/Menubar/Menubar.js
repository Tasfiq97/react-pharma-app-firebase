import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import useRegister from '../../Hooks/useRegister';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';
const Menubar = () => {
  const {user,signOutEmail}= useAuth()
 
    return (
        <div>
           <Navbar  collapseOnSelect expand="lg" bg="none" variant="dark" sticky="top">
  <Container fluid>
  <Navbar.Brand as={HashLink} style={{fontFamily:'Roboto, sans-serif'}} className="text-dark fs-2 fw-bold" to="/home#home">MasterEd</Navbar.Brand>
  <Navbar.Toggle className="text-dark fw-bold"  aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse  id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={HashLink} className="text-dark fw-bold fs-5 me-5" to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} className="text-dark fw-bold fs-5 me-5" to="/home#about">About Us</Nav.Link>

      {user?.email ? 
      <span className="mt-2 fw-bold">{user.email} </span>
      :
       <Nav.Link as={Link}  className="text-dark fw-bold fs-5 me-5" to="/login">Log In</Nav.Link>
}
    { user?.email ? <Button onClick={signOutEmail} variant="light" > Logout</Button>
    :
      <Nav.Link as={Link} className="text-dark fw-bold fs-5 me-5" to="/register">Sign In</Nav.Link>}
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Menubar;