import React from 'react';
import ProfileLink from './ProfileLink';

function LinksHolder(){
    return(
        <div className="Links-Holder">
            <div className="Link-Row">
                <a href="/Interactive-Portfolio" className="Link">Interactive Portfolio</a>
                <ProfileLink link="/Projects" text="Projects" />
                <ProfileLink link="/Websites" text="Websites"/>
                <a href="https://github.com/rcaigoy" className="Link" target="_blank">Git Hub</a>
                <ProfileLink link="something" text="Blogs" />
                <ProfileLink link="something" text="Resume" />
                <ProfileLink link="nothing" text="Links" />
                <ProfileLink link="/About-Ryan" text="About Ryan" />
            </div>
        </div>
    );
}

export default LinksHolder;