import React, { useState, useRef } from "react";
import "./App.css";
import Footer from "./FooterComponent";
import {
  auth,
  generateUserDocument,
  firestore,
  storage,
} from "./Firebase/firebase";
import { NavLink } from "react-router-dom";
import NavBar from "./components/Navbar/NavBarComponent";
import hdball from "./images/hdball.webp";


function Form() {
  const userEmailRef = useRef();
  const displayNameRef = useRef();

  const userPassword = useRef()
  const userPasswordconfirm = useRef()
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  // const [team, SetTeam] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const chooseFile = (e) => {
    setFile(e.target.files[0]);
  };

  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password
  ) => {
    event.preventDefault();
    
    if (userEmailRef.current.value ==="" || displayNameRef.current.value ==="") {
      return  alert("Please fill all the fields")
    } else if (userPassword.current.value !== userPasswordconfirm.current.value || userPassword.current.value === ""){
      return alert("Passwords do not match")
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      generateUserDocument(user, { displayName });
      //storage.ref("users/" + auth.user.uid + "/profile.jpg").put(file);
    } catch (error) {
      setError("Error Signing up with email and password");
    }
    alert("You Created your account");
    //SetTeam("");
    setError(null);
    setEmail("");
    setPassword("");
    setconfirmPassword("");
    setDisplayName("");
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    } else if (name === "userPasswordconfirm") {
      setconfirmPassword(value);
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${hdball})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        <NavBar />
        <div>
          {error !== null && <div>{error}</div>}
          <form
            className="form"
            style={{ backgroundColor: "#edeef0", height: "80vh" }}>
            <h2>
              <b>American Football🏈</b>
            </h2>
            <h3>Create Account</h3>

            <div className="input-btn">
              <label htmlFor="displayName" style={{ marginRight: "10px" }}>
                UserName
              </label>
              <input
                type="text"
                name="displayName"
                placeholder="username"
                value={displayName}
                id="displayName"
                ref={displayNameRef}
                onChange={(event) => onChangeHandler(event)}
              />
            </div>

            <div className="input-btn">
              <label htmlFor="userEmail" style={{ marginRight: "10px" }}>
                Email
              </label>
              <input
                type="email"
                name="userEmail"
                placeholder="email"
                value={email}
                id="userEmail"
                onChange={(event) => onChangeHandler(event)}
                ref={userEmailRef}
              />
            </div>

            <div className="input-btn">
              <label htmlFor="userPassword" style={{ marginRight: "10px" }}>
                Password
              </label>
              <input
                type="password"
                name="userPassword"
                placeholder="password"
                value={password}
                id="userPassword"
                ref={userPassword}
                onChange={(event) => onChangeHandler(event)}
              />
            </div>

            <div className="input-btn">
              <label htmlFor="userPasswordconfirm" style={{ marginRight: "10px" }}>
               Confirm Password
              </label>
              <input
                type="password"
                name="userPasswordconfirm"
                placeholder="confirm password"
                value={confirmPassword}
                id="userPasswordconfirm"
                ref={userPasswordconfirm}
                onChange={(event) => onChangeHandler(event)}
              />
            </div>

            <div className="input-btn">
              <label for="photoURL" style={{ marginRight: "10px" }}>
                Upload Image
              </label>
              <input
                type="file"
                name="photoURL"
                id="photoURL"
                onChange={(e) => chooseFile(e)}
              />
            </div>
            <button
              className="input-btn"
              style={{ width: "300px" }}
              onClick={(event) => {
                createUserWithEmailAndPasswordHandler(event, email, password);
              }}>
              Create Account
            </button>

            <div>
              <p>Already Registered ?</p> <NavLink to="/">Login</NavLink>
            </div>
          </form>
          <div style={{ height: "35px" }}></div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Form;
