import {Route, Switch, NavLink} from "react-router-dom";
import './App.css';
import Form from './FormComponent';
import FirstPage from './FirstPage';



function App() {
  return (
    <div className="App">
      <NavLink exact activeClassName="active-link" to="/form"> Sign Up </NavLink>
      <NavLink exact activeClassName="active-link" to="/"> Main Page </NavLink>
      <Switch>
        <Route exact path='/form' component={Form} />
        <Route exact path='/' component={FirstPage} />
      </Switch>
    </div>
  );
}

export default App;
