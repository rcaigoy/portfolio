import React from 'react';
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import BlogLink from './BlogLink';

function Blogs() {
    return (
        <div>
            <BlogLink link='/Blogs/ASPReview' text="ASP.net Review" />
        </div>
    );
}

export default Blogs;