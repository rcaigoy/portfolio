import React from 'react';
import ProfileLink from '../ProfileLink';
import '../App/App.css';

function Websites() {
    return (
    <div className="Body-Content">
        <div className="Link-Row">
            <a href="/Interactive-Portfolio" className="Link">Interactive Portfolio</a>
            <a href="/pitch-perfect" className="Link">Pitch Perfect</a>
            <ProfileLink link="nothing" text="nothing"/>
            <ProfileLink link="nothing" text="Git Hub" />
            <ProfileLink link="something" text="Blogs" />
            <ProfileLink link="something" text="Resume" />
            <ProfileLink link="nothing" text="Links" />
            <ProfileLink link="/About-Ryan" text="About Ryan" />
        </div>
    </div>
    );
}

export default Websites;