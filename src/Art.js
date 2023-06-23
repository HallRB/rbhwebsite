import React from 'react';
import { Link } from 'react-router-dom';
import './Art.css';

const Art = () => {
  return (
    <div className="ArtNav">
      <nav>
        <ul>
          <li><Link to="/Theatre">Theatre</Link></li>
          <li><Link to="/Art">Art</Link></li>
          <li><Link to="/Coding">Coding</Link></li>
          <li><Link to="/Games">Games</Link></li>
          <li><Link to="/WorkExperience">Work Experience</Link></li>
          <li><Link to="/AboutMe">About Me</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>
      <div className='ArtMain'>
      <h2>Art Main</h2>
        <p>Hello World</p>
      </div>
    </div>
  );
};

export default Art;
