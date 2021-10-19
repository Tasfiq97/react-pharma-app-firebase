
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, ButtonGroup, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import useRegister from '../../Hooks/useRegister';
import {useHistory, useLocation } from 'react-router';

const Login = () => {
  const history=useHistory()
  const location=useLocation()
    const {handleEmail,handlePassword,handleLogin,emptyField}=useAuth()
    const { signInGoogle}=useFirebase()
    const redirect=location.state?.from || "/home"

    const handleRedirect=(e)=>{
e.preventDefault();
      handleLogin()
      .then(result=>{
            history.push(redirect)
      })
      
     
    }

    const signInGoogleHandle=()=>{
      signInGoogle()
      .then(result=>{
        history.push(redirect)
      })
    }
    return (
        <div>
             <div>
            <Container className="p-5">
                <h1 className="fw-bold text-center">Please Log in</h1>
            <Form className="mt-4">
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <p className="text-danger text-center">{emptyField}</p>
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email"  required/>
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
  </Form.Group>
 
  <Button onClick={handleRedirect} variant="info" type="submit">
    Log in
  </Button>
  <hr />
  <Button onClick={signInGoogleHandle} variant="warning"> <FontAwesomeIcon icon={faGoogle} /> sign in with google</Button>
  <p className="mt-5">New to this website ? <Link to="/register"> You can Sign In</Link></p>
</Form>
</Container>
        </div>
        </div>
    );
};

export default Login;