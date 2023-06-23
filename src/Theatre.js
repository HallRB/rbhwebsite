import React from 'react';
import { Link } from 'react-router-dom';
import './Theatre.css';

const Theatre = () => {
  return (
    <div className="TheatreNav">
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
      <div className='TheatreMain'>
      <h2>Theatre Main</h2>
        <p>Hello World</p>
      </div>
    </div>
  );
};

export default Theatre;
