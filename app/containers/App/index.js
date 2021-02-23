/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import { Menu, Carousel } from "antd";
import HomePage from "containers/HomePage/Loadable";
import FeaturePage from "containers/FeaturePage/Loadable";
import NotFoundPage from "containers/NotFoundPage/Loadable";
import LoginPage from "containers/LoginPage/Loadable";
import EnggCoursesPage from "containers/EnggCoursesPage/Loadable";
import DiplomaCoursesPage from "containers/DiplomaCoursesPage/Loadable";
import TimetablePage from "containers/TimetablePage/Loadable";
import DownloadsPage from "containers/DownloadsPage/Loadable";


import Header from "components/Header";
import Footer from "components/Footer";
import SimpleForm from "components/SimpleForm";
import "./index.css";
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
const AppWrapper = styled.div`
  margin: 0 auto;
  min-height: 100%;
`;

function App() {
  return (
    <AppWrapper>
      {/* <AmplifySignOut /> */}
      <Helmet
        titleTemplate="Milind academy"
        defaultTitle="Milind academy of engineering"
      >
        <meta name="description" content="Milind academy of engineering" />
      </Helmet>
      <a
        href="https://api.whatsapp.com/send?phone=+919822276430&text= Hello! I'm%20interested%20in%20your%20tution%20classes"
        className="float"
        target="_blank"
      >
        <i className="fa fa-whatsapp my-float" />
      </a>
      {/* <a className="chatbot-btn"></a> */}
      {/* <SimpleForm className="chatbot" /> */}
      <aside class="aside-page"></aside>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/engineering" component={EnggCoursesPage} />
        <Route path="/diploma" component={DiplomaCoursesPage} />
        <Route path="/timetable" component={TimetablePage} />
        <Route path="/downloads" component={DownloadsPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>

     
      <Footer/>
    </AppWrapper>
  );
}

// export default withAuthenticator(App);
export default App;
