import React from 'react';
import ProfileLink from '../ProfileLink';
import InteractivePortfolioPicture from '../images/InteractivePortfolioScreenShot.JPG';
import CaigoyCreationsProductDesigner from '../images/Caigoy Creations Product Designer.JPG'
import PitchPerfect from '../images/PitchPerfect.jpg'

function Project(){
    return (
    <div className="Body-Content">
        <br /><br />
        <h1>Projects</h1>
        <br /><br />
        <div className="Link-Row">
            <ProfileLink link="/Interactive-Portfolio"
                pic={InteractivePortfolioPicture}
                text="Interactive Portfolio"
                IsExternal="true"
            />

            <ProfileLink link="http://caigoycreations.com/products/create"
                pic={CaigoyCreationsProductDesigner}
                text="CC Product Designer"
                IsExternal="true"
            />

            <ProfileLink link="/Pitch-Perfect"
                pic={PitchPerfect}
                text="Pitch Perfect"
                IsExternal="true"
            />
        </div>
    </div>
    );
}

export default Project