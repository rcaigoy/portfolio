import React from 'react';
import ProfileLink from '../ProfileLink';
import '../App/App.css';
import InteractivePortfolioPicture from '../images/InteractivePortfolioScreenShot.JPG';

function Websites() {
    return (
    <div className="Body-Content">
        <br /><br />
        <h1>Websites</h1>
        <br /><br />
        <div className="Link-Row">
            <ProfileLink link="nothing" text="Caigoy Creations"/>
            <ProfileLink link="nothing" text="Pan-Asian Recovery Alliance" />
            <ProfileLink link="something" text="KBCrush Media" />
            <ProfileLink link="something" text="Art World" />
        </div>
    </div>
    );
}

export default Websites;