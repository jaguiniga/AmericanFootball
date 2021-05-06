import firebase from "./Firebase/firebase";
import React from 'react';
import NavBar from './Navbar/NavBarComponent';
import {Route, Switch, NavLink} from "react-router-dom";



function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("users")
  
  if (loading){
    return <h1>Loading...</h1>
  }

  return (
    
    <div >
      <NavBar />
    </div>
  );
}

export default App;
