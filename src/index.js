import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Form from "./FormComponent";
import FirstPage from "./FirstPage";
import Login from "./components/LoginComponent";
import About from "./AboutComponent";
import Privacy from "./PrivacyComponent";
import Help from "./HelpComponent";
import TermsRules from "./TermsRulesComponent";
import HouseRules from "./HouseRulesComponent";
import Password from "./PasswordComponent";
import ForgotPassword from "./components/ForgotPassword";
import PageNotFound404 from "./components/PageNotFound404";

/*Tutorial*/
import Home from "./components/BlogPost/Home";
import Post from "./components/BlogPost/Post";
import NoMatch from "./components/BlogPost/No-Match";
import Create from "./components/BlogPost/Create";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import reportWebVitals from "./reportWebVitals";
import ProfilePage from "./Profile/ProfilePage";

const routing = (
  <Router>
    <React.StrictMode>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/jaguiniga/AmericanFootball.git" component={App} />
        <Route path="/form" component={Form} />
        <Route path="/firstpage" component={FirstPage} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/help" component={Help} />
        <Route path="/termsrules" component={TermsRules} />
        <Route path="/houserules" component={HouseRules} />
        <Route path="/password" component={Password} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route exact path="/blogPost" component={Home} />
        <Route exact path="/create" component={Create} />
        <Route path="/:slug" component={Post} />
        <Route path="/404" component={NoMatch} />
        <Route path="*" component={PageNotFound404} />
        <Route path="/ProfilePage" component={ProfilePage} />
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
