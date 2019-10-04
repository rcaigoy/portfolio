import React from 'react';
import ProfileLink from './ProfileLink';

function LinksHolder(){
    return(
        <div className="Links-Holder">
            <div className="Link-Row">
                <ProfileLink link="/Interactive-Portfolio" text="Interactive Portfolio"/>
                <ProfileLink link="something" text="Projects" />
                <ProfileLink link="nothing" text="Websites"/>
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