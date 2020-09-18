import React from 'react';
import ProfileLink from '../ProfileLink';
import InteractivePortfolioPicture from '../images/InteractivePortfolioScreenShot.JPG';
import CaigoyCreationsProductDesigner from '../images/CaigoyCreationsProductDesigner.JPG'
import PitchPerfect from '../images/PitchPerfect.jpg'
import CloudCardsApp from '../images/CloudCardsApp.JPG'
import Udemy1 from '../images/Udemy1.JPG'
import Udemy2 from '../images/Udemy2.JPG'

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

            <ProfileLink
                link='http://onelink.to/7gwxaa'
                pic={CloudCardsApp}
                text="Cloud Cards App"
                IsExternal="true"
            />

            <ProfileLink
                link='https://www.udemy.com/course/c-sharp-programming-fundamentals/'
                pic={Udemy1}
                text='Udemy (instructor)'
                IsExternal='true'
            />

            <ProfileLink
                link='https://www.udemy.com/course/building-a-full-website-in-c-sharp/'
                pic={Udemy2}
                text='Udemy (instructor)'
                IsExternal='true'
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