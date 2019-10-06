import React from 'react';
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import Blogs from './Blogs';
import ASPReview from './ASPReview';
import './Blogs.css'

function BlogsRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/Blogs" component={Blogs} />
                <Route path="/Blogs/ASPReview" component={ASPReview} />
            </Switch>
        </BrowserRouter>
    );
}

export default BlogsRouter;