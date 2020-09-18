import React from 'react';
import ProfileLink from '../ProfileLink';
import '../App/App.css';
import InteractivePortfolioPicture from '../images/InteractivePortfolioScreenShot.JPG';
import CaigoyCreations from '../images/CaigoyCreationsSite.JPG'
import PARAPic from './PanAsian.jpg';
import CloudCards from '../images/CloudCards.JPG'

function Websites() {
    return (
    <div className="Body-Content">
        <br /><br />
        <h1>Websites</h1>
        <br /><br />
        <div className="Link-Row">
            <ProfileLink 
                link="http://www.caigoycreations.com" 
                text="Caigoy Creations"
                IsExternal="true"
                target="_blank"
                pic={CaigoyCreations}
            />
            <ProfileLink 
                link="http://www.pan-asianrecovery.org" 
                text="Pan-Asian Recovery Alliance" 
                pic={PARAPic}
                IsExternal="true"
                target="_blank"
            />
            <ProfileLink
                link='https://cloudcards.net/view/1/FJ7j1vB0wAVLlOtu5MQrToDmOozvOVGj'
                text='Cloud Cards'
                target="_blank"
                IsExternal="true"
                pic={CloudCards}
            />
        </div>
    </div>
    );
}

export default Websites;