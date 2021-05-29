import React, { useState, Fragment } from 'react'
import './App.css';
import LandingPage from './views/Pages/LandingPage/LandingPage.js';
import MobileLandingPage from './views/Pages/LandingPage/MobileLandingPage.js';
import Login from './views/Pages/Login/Login.js'
import Admission from './views/Pages/Admission/Admission.js'
import Signup from './views/Pages/Signup/Signup.js';
import PrivateRoute from './views/Pages/Login/PrivateRoute.js';
import Forms from './views/Pages/Forms/Forms.js';
import AboutUs from './views/Pages/AboutUs/AboutUs.js';
import MobileAboutUs from './views/Pages/AboutUs/MobileAboutUs.js';
import ForgotPassword from './views/Pages/ForgotPassword/ForgotPassword.js';
import AdmissionPage from './views/Pages/AdmissionPage/AdmissionPage.js';
import ScholarshipPage from './views/Pages/AdmissionPage/ScholarshipPage.js';
import Academics from './views/Pages/Academics/Academics.js';
import MobileAcademics from './views/Pages/Academics/MobileAcademics.js';
import ApplicationView from './views/Pages/Admission/ApplicationView.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

function App() {
  const [authenticated, setAuthenticated] = useState(localStorage.getItem('jwtToken') ? true : false);

  return (
    <>
      <Fragment>
        {/* {authenticated ? <Navigationbar setAuthenticated={setAuthenticated} merchant={merchant}/> : ""} */}
      <Router>
         <Switch>
           {authenticated ? <Redirect from='/login' to="/portal"/> : ""}
          <Route exact path="/" component={()=> <LandingPage authenticated={authenticated} />}/>
          <Route exact path="/mobile" component={()=> <MobileLandingPage authenticated={authenticated} />}/>
          <Route exact path="/login" component={()=> <Login />}/>
          <Route exact path="/sign-up" component={()=> <Signup />}/>
          <Route exact path="/about-us" component={()=> <AboutUs />}/>
          <Route exact path="/about-us-mobile" component={()=> <MobileAboutUs />}/>
          <Route exact path="/admission-page" component={()=> <AdmissionPage />}/>
          <Route exact path="/scholarship-page" component={()=> <ScholarshipPage />}/>
          <Route exact path="/academics" component={()=> <Academics />}/>
          <Route exact path="/academics-mobile" component={()=> <MobileAcademics />}/>
          <Route exact path="/forgot-password" component={()=> <ForgotPassword />}/>
          <PrivateRoute exact path="/portal" component={()=><Admission setAuthenticated={setAuthenticated} />} />
          <PrivateRoute exact path="/admission-form" component={()=> <Forms />} />
          <PrivateRoute exact path="/application-view" component={()=> <ApplicationView />} />
          <Route path="*">
            {/* <PageNotFound /> */}
          </Route>
         </Switch>
      </Router>
      </Fragment>
    </>
  );
}

export default App;
