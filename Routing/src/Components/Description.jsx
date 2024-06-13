import React from 'react';
import Accordion from 'react-bootstrap/Accordion'; 
import { Link } from 'react-router-dom';



function Description() {
  return (
      <div className="container">
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Description</Accordion.Header>
        <Accordion.Body>
          React routing manages navigation in React apps, mapping URL paths to 
          components for seamless user navigation without full page reloads. It
          uses React Router library's components like {'<Route>'} and {'<Link>'} 
          to define routes and handle rendering based on URL changes.
          <br/><br/>

          Click on <Link to ="/Installation">Installation</Link> to learn which command is used to install react routing library.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default Description;
