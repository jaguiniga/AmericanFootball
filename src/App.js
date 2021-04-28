import { Route, Switch, NavLink } from "react-router-dom";
import "./App.css";
// import "./Footer.css";
import Form from "./FormComponent";
import FirstPage from "./FirstPage";
import Footer from "./FooterComponent";
import About from "./AboutComponent";
import Help from "./HelpComponent";
import TermsRules from "./TermsRulesComponent";
import Privacy from "./PrivacyComponent";
import HouseRules from "./HouseRulesComponent";
import Password from "./PasswordComponent";
function App() {
  return (
    <div className="Body">
      <NavLink exact activeClassName="active-link" to="/form">
        {" "}
        Sign Up{" "}
      </NavLink>
      <NavLink exact activeClassName="active-link" to="/">
        {" "}
        Main Page{" "}
      </NavLink>

      <Switch>
        <Route exact path="/form" component={Form} />
        <Route exact path="/" component={FirstPage} />
        <Route exact path="/" component={Footer} />
        <Route exact path="/about" component={About} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/termsrules" component={TermsRules} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/houserules" component={HouseRules} />
        <Route exact path="/password" component={Password} />
        <Route render={() => <h1>ERROR NOT FOUND</h1>} />
      </Switch>
    </div>
  );
}

export default App;
