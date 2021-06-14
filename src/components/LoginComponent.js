import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import {
  auth,
  signInWithGoogle,
  signInWithFacebook,
} from "../Firebase/firebase";

import "../css/LoginComponent.css";

import facebookIcon from "../images/social/facebook48_48.png";
import googleIcon from "../images/social/google48_48.png";
import instagramIcon from "../images/social/instagram48_48.png";

function LoginComponent(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const resetInput = () => {
    setEmail("");
    setPassword("");
  };

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resetInput();
      })
      .catch((error) => {
        setError("Error signing in with password and email!");
        console.error("Error signing in with password and email", error);
        setError(null);
      });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  return (
    <section>
      <div
        className="card border-primary mb-3"
        style={{
          maxWidth: "17rem",
          minWidth: "17rem",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}>
        <div className="card-header">
          <strong>Login</strong>
        </div>
        <div className="card-body text-primary">
          <div>
            <input
              className="zoom"
              type="image"
              src={facebookIcon}
              alt="Submit"
              onClick={() => {
                signInWithFacebook();
                props.popUpToggle(false);
              }}
              style={{ margin: "10px" }}></input>

            <input
              className="zoom"
              type="image"
              src={instagramIcon}
              alt="Submit"
              style={{ margin: "10px" }}></input>

            <input
              className="zoom"
              type="image"
              src={googleIcon}
              alt="Submit"
              onClick={() => {
                signInWithGoogle();
                props.popUpToggle(false);
              }}
              style={{ margin: "10px" }}></input>

            <form>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="username"></input>
              </div>

              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"></input>
              </div>

              <div className="form-group">
                <input
                  type="submit"
                  value="Login"
                  className="btn login_btn"
                  onClick={(event) => {
                    signInWithEmailAndPasswordHandler(event, email, password);
                    props.popUpToggle(false);
                  }}></input>
              </div>
            </form>
          </div>

          {error !== null && <div>{error}</div>}

          <p
            className="forgot-password"
            style={{ fontSize: "14px", margin: "0" }}>
            <NavLink exact activeClassName="active-link" to="/password">
              Forgot password?
            </NavLink>
          </p>

          <p
            className="forgot-password"
            style={{ fontSize: "13px", margin: "0" }}>
            <NavLink exact activeClassName="active-link" to="/form">
              Don't have an account? SignUp
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoginComponent;
