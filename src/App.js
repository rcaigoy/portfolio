import React from 'react';
import logo from './logo.svg';
import './App.css';

//added
import AboutMe from './AboutMe';
import LinksHolder from './LinksHolder';


function App() {
  return (
    <div className="App">
      <div className="Profile-Picture">
        PorfilePicture
      </div>
      <header className="App-header">
        <h1>
          <div className="Name">Ryan Caigoy</div>
          <br />
          Web Application Developer
          <br />
          Portfolio
          <br />
        </h1>
      </header>

      <div className="Body-Content">
        <AboutMe />
        <LinksHolder />
      </div>

    </div>
  );
}

export default App;