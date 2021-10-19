import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{minHeight:"100vh",textAlign:"center"}}> 
            <h1>Page not found</h1>
            <Link to="/home">
            <Button>Go back</Button>
            </Link>
        </div>
    );
};

export default NotFound;