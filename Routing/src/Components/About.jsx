import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="container pt-5">
      <h2>Welcome to the About Page</h2>
     <div className="container ">
        React routing allows you to manage navigation within your React application. 
        It enables users to move between different views or pages without full page reloads, providing a seamless user experience.
      
      
        In React Router DOM, you define routes using the {`<Route>`} component and handle navigation using the {`<Link>`} component.
      </div>
      <div className="pb-5">
       <Link to ="/"> <div className="btn btn-primary me-2">Home</div></Link>
       <Link to ="/description"> <div  className="btn btn-primary">Description</div></Link>
      </div>
    </div>
  );
}

export default About;
