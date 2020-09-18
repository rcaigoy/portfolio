import React, {useEffect, useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {browserHistory} from 'history';
import ScrollToTop from './ScrollToTop';

import InteractivePortfolio from './InteractivePortfolio/InteractivePortfolio';
import App from "./App/App";
import AboutRyan from './About-Ryan/about-ryan';
import NotFound from "./NotFound";
import Menu from './Menu/Menu';
import Websites from './Websites/Websites';
import Projects from './Projects/Projects';
import PitchPerfect from './PitchPerfect/PitchPerfectPage';
import BlogsRouter from './Blogs/BlogsRouter';
import WebsiteRequest from './Requests/WebsiteRequest.js'
import Footer from './Footer/Footer'
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy'

const Router = props => {
  var IsInteractive = window.location.href.includes("Interactive-Portfolio")
  useEffect(() => {
    var IsInteractive = window.location.href.includes("Interactive-Portfolio");
  }, []);
  return (
  <BrowserRouter>
    <Menu />
    <ScrollToTop />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/About-Ryan" component={AboutRyan} />
      <Route path="/Projects" component={Projects} />
      <Route path="/Interactive-Portfolio" component={InteractivePortfolio} />
      <Route path="/Websites" component={Websites} />
      <Route path="/Blogs" component={BlogsRouter} />
      <Route path="/Pitch-Perfect" component={PitchPerfect} />
      <Route path="/requests/website" component={WebsiteRequest} />
      <Route path="/Privacy-Policy" component={PrivacyPolicy} />
      <Route path="/MVCCodingCourse"
        component={() => { 
          window.location.href = 'https://www.udemy.com/course/building-a-full-website-in-c-sharp/?couponCode=4AC350DC7D00EA0FB63C'; 
          return null;
        }}
      />
      <Route path="/ProgrammingFundamentals"
        component={() => { 
          window.location.href = 'https://www.udemy.com/course/c-sharp-programming-fundamentals/?couponCode=9CCFD74BF22D67646F4E'; 
          return null;
        }}
      />
      <Route component={NotFound} />
    </Switch>
    {!IsInteractive &&
      <Footer />
    }
  </BrowserRouter>
  )
}

export default Router;
