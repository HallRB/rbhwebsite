import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Theatre from './Theatre';
import Art from './Art';
import Coding from './Coding';
import Games from './Games';
import WorkExperience from './WorkExperience';
import AboutMe from './AboutMe';
import Contact from './Contact';


function App() {
  return (
    <Router>
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/Theatre">Theatre</Link>
          </li>
          <li>
            <Link to="/Art">Art</Link>
          </li>
          <li>
            <Link to="/Coding">Coding</Link>
          </li>
          <li>
            <Link to="/Games">Games</Link>
          </li>
          <li>
            <Link to="/WorkExperience">Work Experience</Link>
          </li>
          <li>
            <Link to="/AboutMe">About Me</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <p>App</p>
      <header>
        <h1>Welcome to my website</h1>
        <h2>Richard B. Hall</h2>
        <p>Header</p>
      </header>
      <main>
        <p>Main</p>
        <Routes>
            <Route path="/Theatre" element={<Theatre />} />
            <Route path="/Art" element={<Art />} />
            <Route path="/Coding" element={<Coding />} />
            <Route path="/Games" element={<Games />} />
            <Route path="/WorkExperience" element={<WorkExperience />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <div id="AppMain">        
          <p>App Main</p>
          </div>
      </main>
      <footer>
        {/* Add your footer content here */}
      </footer>
    </div>
    </Router>
  );
}

export default App;
