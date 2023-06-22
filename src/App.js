import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import TheatrePage from './TheatrePage';



function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/theatre">Theatre</Link>
            </li>
            <li>
              <Link to="/art">Art</Link>
            </li>
            <li>
              <Link to="/coding">Coding</Link>
            </li>
            <li>
              <Link to="/games">Games</Link>
            </li>
            <li>
              <Link to="/work-experience">Work Experience</Link>
            </li>
            <li>
              <Link to="/about-me">About Me</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <header className="App-header">
          <h1>Welcome to my website</h1>
          <h2>Richard B. Hall</h2>
        </header>
        <main>
          <Route path="/theatre" component={TheatrePage} />
          {/* Add other Route components for other pages */}
          <section id="games">
            <h3>Games</h3>
            {/* Add your games content here */}
          </section>
        </main>
        <footer>
          {/* Add your footer content here */}
        </footer>
      </div>
    </Router>
  );
}
