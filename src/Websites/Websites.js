import React from 'react';
import ProfileLink from '../ProfileLink';
import '../App/App.css';
import InteractivePortfolioPicture from '../images/InteractivePortfolioScreenShot.JPG';
import PARAPic from './PanAsian.jpg';

function Websites() {
    return (
    <div className="Body-Content">
        <br /><br />
        <h1>Websites</h1>
        <br /><br />
        <div className="Link-Row">
            <ProfileLink link="nothing" text="Caigoy Creations"/>
            <ProfileLink 
                link="http://www.pan-asianrecovery.org" 
                text="Pan-Asian Recovery Alliance" 
                pic={PARAPic}
                IsExternal="true"
                target="_blank"
            />
            <ProfileLink link="something" text="KBCrush Media" />
            <ProfileLink link="something" text="Art World" />
        </div>
    </div>
    );
}

export default Websites;