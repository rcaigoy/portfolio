import React from 'react';
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import BlogLink from './BlogLink';
import ProfileLink from '../ProfileLink';
import ASPNetPic from './ASPNet/ASPNet.jpg';
import MVCReview from './ASPNetMVC/ASPNetPic.jpg';

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
                    text="MVC Entity Review"
                    pic={MVCReview}
                />
                <ProfileLink
                    text="API's and the Repository Pattern"
                />
                <ProfileLink
                    text="Asynchronous Coding in C#"
                />
                <ProfileLink
                    text="Levels of Defensive Coding"
                />
                <ProfileLink
                    text="Learning React.js"
                />
            </div>
        </div>
    );
}

export default Blogs;