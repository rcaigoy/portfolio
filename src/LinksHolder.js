import React from 'react';
import ProfileLink from './ProfileLink';
import InteractivePortfolioPicture from './images/InteractivePortfolioScreenShot.JPG';
import GitHubPicture from './images/GitHub.jpg';
import AboutRyanThumbnail from './images/AboutRyanThumbnail.jpg';
import AboutRyan from './About-Ryan/about-ryan';
import WebsitesPic from './images/Websites.jpg';
import CaigoyCreationsProductDesigner from './images/CaigoyCreationsProductDesigner.JPG'
import Blogs from './images/Blogs.jpg'
import Resume from './images/Resume.JPG'
import Hobbies from './images/Hobbies.jpg'

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
                <ProfileLink 
                    link="/Blogs" 
                    text="Blogs" 
                    pic={Blogs}
                />
                <ProfileLink 
                    link="/Resume.pdf" 
                    text="Resume"
                    pic={Resume}
                    target="_blank"
                    IsExternal="true"
                />
                <ProfileLink 
                    link="/Hobies" 
                    text="Hobbies" 
                    pic={Hobbies}
                />
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