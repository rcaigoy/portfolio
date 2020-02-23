import React from 'react';
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import BlogLink from './BlogLink';
import ProfileLink from '../ProfileLink';
import ASPNetPic from './ASPNet/ASPNet.jpg';
import MVCReviewPic from './ASPNetMVC/ASPNetPic.jpg';
import Async from './Async/Asynchronous.jpg'
import DefensiveCoding from './Defensive/DefensiveCoding.jpg'
import API from './APIs/Swagger-logo.jpg'
import LearningReact from './LearningReact/LearningReact.png'

function Blogs() {
    return (
        <div className="Body-Content">
            <br /><br />
            <h1>Blogs</h1>
            <br /><br />
            <div className="Link-Row">
                <ProfileLink 
                    link='/Blogs/ASPReview' 
                    text="First Time Learning ASP.NET Review" 
                    pic={ASPNetPic}
                />
                <ProfileLink 
                    link='/Blogs/MVC-and-Entity'
                    text="MVC Entity Review"
                    pic={MVCReviewPic}
                />
                <ProfileLink
                    link='/Blogs/APIs-and-the-repository-pattern'
                    text="API's and the Repository Pattern"
                    pic={API}
                />
                <ProfileLink
                    link='/Blogs/Asynchronous-C-Sharp'
                    text="Asynchronous Coding in C#"
                    pic={Async}
                />
                <ProfileLink
                    link='/Blogs/Levels-of-defensive-coding'
                    text="Levels of Defensive Coding"
                    pic={DefensiveCoding}
                />
                <ProfileLink
                    text="Learning React.js"
                    pic={LearningReact}
                />
            </div>
        </div>
    );
}

export default Blogs;