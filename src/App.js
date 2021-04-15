import {Route, Switch, NavLink} from "react-router-dom";
import './App.css';
import './Footer.css'
import Form from './FormComponent';
import FirstPage from './FirstPage';
import About from './AboutComponent';
import Privacy from './PrivacyComponent';
import Help from './HelpComponent';
import TermsRules from './TermsRulesComponent'


function App() {
  return (
    <div >
      <NavLink exact activeClassName="active-link" to="/form"> Sign Up </NavLink>
      <NavLink exact activeClassName="active-link" to="/"> Main Page </NavLink>
      

      <Switch>
        <Route exact path='/form' component={Form} />
        <Route exact path='/' component={FirstPage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/privacy' component={Privacy} />
        <Route exact path='/help' component={Help} />
        <Route exact path='/termsrules' component={TermsRules} />
        <Route render={() => <h1>ERROR NOT FOUND</h1>} />
      </Switch>

    </div>
  );
}

export default App;
