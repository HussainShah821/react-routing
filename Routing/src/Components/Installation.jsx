import React from 'react';
import Accordion from 'react-bootstrap/Accordion'; 
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Installation() {

  return (
    <div className="container">
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Installation</Accordion.Header>
        <Accordion.Body>
  To install React Router DOM, you can use npm or yarn. Here's the command:
  <br />
  <br />
  <code>npm install react-router-dom</code>
  <br />
  <br />
  or
  <br />
  <br />
  <code>yarn add react-router-dom</code>
</Accordion.Body>

      </Accordion.Item>
    </Accordion>
    <br/>
     <Link to ="/"> <Button variant="secondary">Return to Home</Button></Link>
    </div>
  );
}

export default Installation;
