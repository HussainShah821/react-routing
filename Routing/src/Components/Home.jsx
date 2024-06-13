import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Home() {
  const buttonStyle = {
    width: '110px', // Set a fixed width for all buttons
    marginBottom: '10px', // Add margin bottom for spacing
  };

  return (
    <div className="container">

      <h2>Welcome to the Home Page</h2>
      <h3>Click on any button to move to other page</h3>
      <div className="row mt-5">
        <div className="col-md-6">
        <Link to ="/About">
          <Button variant="secondary" style={buttonStyle}>About</Button>
          </Link>
        </div>
        <div className="col-md-6">
        <Link to ="/installation">
          <Button variant="secondary" style={buttonStyle}>Installation</Button>
        </Link>
          </div>
      </div>
      <div className="row">
        <div className="col-md-6">
              <Link to ="/description"> <Button variant="secondary" style={buttonStyle}>Description</Button></Link>
        </div>
        <div className="col-md-6">
        <Link to ="/error">
          <Button variant="secondary" style={buttonStyle}>404 error</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
