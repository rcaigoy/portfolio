import React from 'react';
import ProfileLink from '../ProfileLink';
import InteractivePortfolioPicture from '../images/InteractivePortfolioScreenShot.JPG';

function Project(){
    return (
    <div className="Body-Content">
        <div className="Link-Row">
            <ProfileLink link="/Interactive-Portfolio"
                pic={InteractivePortfolioPicture}
                text="Interactive Portfolio"
                IsExternal="true"
            />
            <a href="/pitch-perfect" className="Link">Pitch Perfect</a>
            <ProfileLink link="/Websites" text="Websites"/>
            <ProfileLink link="nothing" text="Git Hub" />
            <ProfileLink link="something" text="Blogs" />
            <ProfileLink link="something" text="Resume" />
            <ProfileLink link="nothing" text="Links" />
            <ProfileLink link="/About-Ryan" text="About Ryan" />
        </div>
    </div>
    );
}

export default Project