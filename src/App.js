import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="#theatre">Theatre</a></li>
          <li><a href="#art">Art</a></li>
          <li><a href="#coding">Coding</a></li>
          <li><a href="#games">Games</a></li>
          <li><a href="#work-experience">Work Experience</a></li>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <header className="App-header">
        <h1>Welcome to my website</h1>
        <h2>Richard B. Hall</h2>
      </header>
      <main>
        {/* Add your content here */}
        <section id="games">
          <h3>Games</h3>
          {/* Add your games content here */}
        </section>
      </main>
      <footer>
        {/* Add your footer content here */}
      </footer>
    </div>
  );
}

export default App;
