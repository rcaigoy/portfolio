import React from 'react';
import logo from '../logo.svg';
import './App.css';

//added
import AboutMe from './AboutMe';
import LinksHolder from '../LinksHolder';
import ProfilePicture from '../images/profilepictureSlim.jpg';


function App() {
  return (
    <div className="Body-Content">
      <div className="App">
          <img src={ProfilePicture} className="Profile-Picture" />
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

        <AboutMe />
        <LinksHolder />

      </div>
    </div>
  );
}

export default App;