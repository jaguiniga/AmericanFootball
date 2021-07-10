import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Login from "./components/LoginComponent";
import Form from "./FormComponent";
import About from "./AboutComponent";
import Privacy from "./PrivacyComponent";
import Help from "./HelpComponent";
import TermsRules from "./TermsRulesComponent";
import HouseRules from "./HouseRulesComponent";
import Password from "./PasswordComponent";
import ForgotPassword from "./components/ForgotPassword";
import PageNotFound404 from "./components/PageNotFound404";


import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import UserSignedIn from "./Profile/UserSignedIn";
import ContactUs from "./ContactUs";
import reportWebVitals from "./reportWebVitals";
import UserProvider from "./auth/UserProvider";
import ProfilePage from "./Profile/ProfilePage";

const routing = (
  <Router>
    <React.StrictMode>
   
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/jaguiniga/AmericanFootball.git" component={App} />
        <Route exact path="/ContactUs" component={ContactUs} />
        <Route exact path="/jaguiniga/ContactUs" component={ContactUs} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/termsrules" component={TermsRules} />
        <Route exact path="/houserules" component={HouseRules} />
        <Route exact path="/password" component={Password} />
        <Route exact path="/forgotpassword" component={ForgotPassword} />
        <Route exact path="/ProfilePage" component={ProfilePage} />

        <Route exact path="/UserSignedIn" component={UserSignedIn} />

       
        
       
        <Route path="*" component={PageNotFound404} />
      </Switch>
     
    </React.StrictMode>
  </Router>
);

console.log(routing);

ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
