import React from 'react';
import ProfileLink from './ProfileLink';

function LinksHolder(){
    return(
        <div className="Links-Holder">
            <div className="Link-Row">
                <a href="/Interactive-Portfolio" className="Link">Interactive Portfolio</a>
                <ProfileLink link="something" text="Projects" />
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

export default LinksHolder;