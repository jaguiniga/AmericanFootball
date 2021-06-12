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
import { teamRoster } from "../RosterComponent";
function LoginComponent() {
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
              }}
              style={{ margin: "10px" }}></input>

            <form>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="email"
                  class="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="username"></input>
              </div>

              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  class="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"></input>
              </div>

              <div class="form-group">
                <input
                  type="submit"
                  value="Login"
                  class="btn login_btn"
                  onClick={(event) => {
                    signInWithEmailAndPasswordHandler(event, email, password);
                  }}>
                </input>
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
      <div
        className="card border-secondary mb-3"
        style={{
          maxWidth: "18rem",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}>
        <div className="card-header">
          <strong>Team Rosters</strong>
        </div>
        <div className="card-body text-secondary">
          <ul className="links">
            <li className="bullets">
              <a href="https://www.sbnation.com/nfl-draft">Dallas Cowboys</a>
            </li>
          </ul>

          <ul className="links">
            <li className="bullets">
              {" "}
              <a href="https://www.si.com/nfl/dolphins/news/complete-2021-nfl-draft-team-by-team-rundown">
                Green Bay Packers
                <teamRoster />
              </a>
            </li>
          </ul>

          <ul className="links">
            <li className="bullets">
              <a href="https://www.pff.com/news/draft-film-study-pros-and-cons-2021-nfl-draft">
                Jacksonville Jaguars
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="card border-success mb-3"
        style={{
          maxWidth: "18rem",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}>
        <div className="card-header">
          <strong>Team Injury update</strong>
        </div>
        <div className="card-body text-success">
          <h5 className="card-title">Success card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div
        className="card border-danger mb-3"
        style={{
          maxWidth: "18rem",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}>
        <div className="card-header">Header</div>
        <div className="card-body text-danger">
          <h5 className="card-title">Danger card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div
        className="card border-warning mb-3"
        style={{
          maxWidth: "18rem",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}>
        <div className="card-header">Header</div>
        <div className="card-body text-warning">
          <h5 className="card-title">Warning card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div
        className="card border-info mb-3"
        style={{
          maxWidth: "18rem",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}>
        <div className="card-header">Header</div>
        <div className="card-body text-info">
          <h5 className="card-title">Info card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div
        className="card border-light mb-3"
        style={{
          maxWidth: "18rem",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Light card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoginComponent;
