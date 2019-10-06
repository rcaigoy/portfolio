import React from 'react';
import ProfileLink from './ProfileLink';
import InteractivePortfolioPicture from './images/InteractivePortfolioScreenShot.JPG';
import GitHubPicture from './images/GitHub.jpg';

function LinksHolder(){
    return(
        <div className="Links-Holder">
            <div className="Link-Row">
                <ProfileLink link="/Interactive-Portfolio"
                    pic={InteractivePortfolioPicture}
                    text="Interactive Portfolio"
                    IsExternal="true"
                />
                <ProfileLink link="/Projects" text="Projects" />
                <ProfileLink link="/Websites" text="Websites"/>
                <ProfileLink 
                    link="https://github.com/rcaigoy"
                    text="Git Hub"
                    IsExternal="true"
                    target="_blank"
                    pic={GitHubPicture}
                />
                <ProfileLink link="something" text="Blogs" />
                <ProfileLink link="something" text="Resume" />
                <ProfileLink link="nothing" text="Links" />
                <ProfileLink link="/About-Ryan" text="About Ryan" />
            </div>
        </div>
    );
}

export default LinksHolder;