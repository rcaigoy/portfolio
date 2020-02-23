import React from 'react';
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import Blogs from './Blogs';
import ASPReview from './ASPNet/ASPReview';
import APIs from './APIs/APIs';
import AysnchronousBlog from './Async/AsynchronousBlog'
import './Blogs.css'
import AsynchronousBlog from './Async/AsynchronousBlog';
import MVCBlog from './ASPNetMVC/MVC'
import DefensiveCodingBlog from './Defensive/DefensiveCoding'

function BlogsRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/Blogs" component={Blogs} />
                <Route path="/Blogs/ASPReview" component={ASPReview} />
                <Route path="/Blogs/APIs-and-the-repository-pattern" component={APIs} />
                <Route path="/Blogs/Asynchronous-C-Sharp" component={AsynchronousBlog}/>
                <Route path="/Blogs/MVC-and-Entity" component={MVCBlog} />
                <Route path="/Blogs/Levels-of-defensive-coding" component={DefensiveCodingBlog} />
            </Switch>
        </BrowserRouter>
    );
}

export default BlogsRouter;