import React, { useContext } from "react";
import { Router } from "react-router-dom";
import Login from "../components/LoginComponent";
import Form from "../FormComponent";
import UserProvider from "../auth/UserProvider";
import ProfilePage from "./ProfilePage";
import { UserContext } from "../auth/UserProvider";
import Password from "../PasswordComponent";
import NavBar from "../components/Navbar/NavBarComponent";

function UserSignedIn() {
  const user = useContext(UserContext);
  return (
      <div>
     <div class="ds-top"></div>
  
        </div>
      
  );
}

export default UserSignedIn;