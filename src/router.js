import React from "react";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import {browserHistory} from 'history';
import InteractivePortfolio from './InteractivePortfolio/InteractivePortfolio';
import App from "./App/App";
import AboutRyan from './About-Ryan/about-ryan';
import NotFound from "./NotFound";
import Menu from './Menu/Menu';
import Websites from './Websites/Websites';
import Projects from './Projects/Projects';
import PitchPerfect from './PitchPerfect/PitchPerfectPage';

const Router = () => (
  <BrowserRouter>
    <Menu />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/About-Ryan" component={AboutRyan} />
      <Route path="/Projects" component={Projects} />
      <Route path="/Interactive-Portfolio" component={InteractivePortfolio} />
      <Route path="/Websites" component={Websites} />
      <Route path="/pitch-Perfect" component={PitchPerfect} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
