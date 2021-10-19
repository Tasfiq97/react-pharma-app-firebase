
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useRegister from '../../Hooks/useRegister';



const Register = () => {
   const location=useLocation()
   const history=useHistory()
  const {handleEmail,handlePassword,handleRegister,emptyField}= useAuth()

const redirect=location.state?.from || "/home"
   const handleRedirect=(e)=>{
     e.preventDefault()
     handleRegister()
     .then(result=>{
          history.push(redirect)
     })
   }
 


    return (
        <div>
            <Container className="p-5">
                <h1 className="fw-bold text-center">Please Sign up here</h1>
                <p className="text-danger text-center">{emptyField}</p>
            <Form className="mt-4">
            
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email"  required/>
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required/>
  </Form.Group>
 
  <Button onClick={handleRedirect} variant="info" type="submit">
    Sign up
  </Button>
  <p className="mt-5">Already have an account ? <Link to="/login">Log in</Link></p>
</Form>
</Container>
        </div>
    );
};

export default Register;