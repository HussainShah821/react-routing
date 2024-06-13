import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Error() {
 

  return (
    <div className="container">

      <h1>404 Error!</h1>
      
         <Link to ="/"> <Button variant="danger">Return to Home</Button></Link>
    </div>
      
    
  );
}

export default Error;
