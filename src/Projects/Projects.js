import React from 'react';
import ProfileLink from '../ProfileLink';
import InteractivePortfolioPicture from '../images/InteractivePortfolioScreenShot.JPG';

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
            <ProfileLink 
                link="/Pitch-Perfect"
                text="Pitch Perfect"
                IsExternal="true"
            />
            <ProfileLink link="#" text="Swerve" />
            <ProfileLink link="#" text="Fly Catcher" />
        </div>
    </div>
    );
}

export default Project