import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Showcase from './Pages/Showcase/Showcase'
import Apply from './Pages/Apply/Apply'
import About from './Pages/About/About'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={ <Showcase/> }></Route>
          <Route path="/home" element={ <Apply/> }></Route>
          <Route path="/about" element={ <About/> }></Route>

        </Routes>
      <header className="App-header">
        <p>
          See our featured artists!
        </p>
        
      </header>
      </Router>
    </div>
  );
}

export default App;
