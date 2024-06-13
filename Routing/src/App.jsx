import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Description from "./Components/Description";
import Error from "./Components/ErrorPage";
import Installation from "./Components/Installation"
import './App.css';

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Description" element={<Description/>} />
        <Route path="/Installation" element={<Installation />} />
        <Route path="/Error" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
