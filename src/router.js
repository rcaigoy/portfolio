import React from "react";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import {browserHistory} from 'history';
import InteractivePortfolio from './InteractivePortfolio';
import App from "./App";
import AboutRyan from './About-Ryan/about-ryan';
import NotFound from "./NotFound";
import Menu from './Menu';
import Websites from './Websites';

const Router = () => (
  <BrowserRouter>
    <Menu />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/About-Ryan" component={AboutRyan} />
      <Route path="/Interactive-Portfolio" component={InteractivePortfolio} />
      <Route path="/Websites" component={Websites} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
