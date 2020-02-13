import React, {useEffect, useState} from 'react';
import logo from '../logo.svg';
import './App.css';

//added
import AboutMe from './AboutMe';
import LinksHolder from '../LinksHolder';
import ProfilePicture from '../images/profilepictureSlim.jpg';


function App() {
  useEffect(() => {
    const checkScroll = e => {
      if (window.scrollY > window.pageYOffset){
      console.log('off' + window.pageYOffset);
      console.log('y' + window.scrollY);
      }
    }
    window.addEventListener('scroll', checkScroll);
  }, []);
  return (
    <div className="Body-Content">
      <div className="App">
          <img src={ProfilePicture} className="Profile-Picture" />
        <header className="App-header">
          <h1>
            Web Application Developer
            <br />
          </h1>
        </header>

        <AboutMe className='AboutMeClass' />

        <br /><br /><br /><br />

        <LinksHolder />
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        
      </div>
    </div>
  );
}

export default App;