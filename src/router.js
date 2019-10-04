import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {browserHistory} from 'history';
import App from "./App";
import AboutRyan from './About-Ryan/about-ryan';
import NotFound from "./NotFound";
import InteractivePortfolio from './InteractivePortfolio';
import Menu from './Menu';

const Router = () => (
  <BrowserRouter>
    <Menu />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/About-Ryan" component={AboutRyan} />
      <Route path="/Interactive-Portfolio" component={InteractivePortfolio} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
