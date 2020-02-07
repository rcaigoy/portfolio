import React from 'react';
import ProfileLink from './ProfileLink';
import InteractivePortfolioPicture from './images/InteractivePortfolioScreenShot.JPG';
import GitHubPicture from './images/GitHub.jpg';
import AboutRyanThumbnail from './images/AboutRyanThumbnail.jpg';
import AboutRyan from './About-Ryan/about-ryan';
import WebsitesPic from './images/Websites.jpg';
import CaigoyCreationsProductDesigner from './images/Caigoy Creations Product Designer.JPG'

function LinksHolder(){
    return(
        <div className="Links-Holder">
            <br /><br />
            <label style={{display: 'flex', justifyContent: 'center'}}>Click a link below!</label>
            <div className="Link-Row">
                <ProfileLink link="/Interactive-Portfolio"
                    pic={InteractivePortfolioPicture}
                    text="Interactive Portfolio"
                    IsExternal="true"
                />
                <ProfileLink link="/Projects" 
                    pic={WebsitesPic}
                    text="Projects"
                    IsExternal="true"
                />
                <ProfileLink 
                    link="/Websites" 
                    text="Websites"
                    pic={CaigoyCreationsProductDesigner}
                />
                <ProfileLink 
                    link="https://github.com/rcaigoy"
                    text="Git Hub"
                    IsExternal="true"
                    target="_blank"
                    pic={GitHubPicture}
                />
                <ProfileLink link="/Blogs" text="Blogs" />
                <ProfileLink link="something" text="Resume" />
                <ProfileLink link="nothing" text="Links" />
                <ProfileLink 
                    link="/About-Ryan" 
                    text="About Ryan" 
                    pic={AboutRyanThumbnail}
                />
            </div>
        </div>
    );
}

export default LinksHolder;