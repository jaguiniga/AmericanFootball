import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../Firebase/firebase";
import { UserContext } from "../../auth/UserProvider";

import "../../css/NavBar.css";

function Navbar(props) {
  const user = useContext(UserContext);
  const [signOutStyle, setSignOutStyle] = useState({ display: "none" });
  const [signInStyle, setSignInStyle] = useState({ display: "block" });

  useEffect(() => {
    if (user === undefined) {
      setSignInStyle({ display: "block" });
      setSignOutStyle({ display: "none" });
    } else {
      setSignInStyle({ display: "none" });
      setSignOutStyle({ display: "block" });
    }
  }, [user]);

  return (
    <div>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        {/*Logo*/}
        <a className="navbar-brand" href="/">
          American Football
          <i className="fas fa-football-ball fa-fw" />
        </a>
        <div className="ml-auto">
          <button
            className="navbar-toggler"
            type="button"
            dataToggle="collapse"
            dataTarget="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              {/* home */}
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="fas fa-home" />
                </a>
              </li>
              {/* signup */}
              <li className="nav-item" style={signInStyle}>
                <a className="nav-link" href="/form">
                  <i className="fas fa-user-plus" />
                </a>
              </li>
              {/* signIn */}
              <li className="nav-item" style={signInStyle}>
                <button
                  type="button"
                  className="btn "
                  dataToggle="modal"
                  dataTtarget="#signInModal"
                  onClick={() => {
                    props.isSignInButton(true);
                    props.isOpenButton(true);
                  }}>
                  <i
                    className="fas fa-sign-in-alt"
                    style={{
                      color: "#a8a8a8",
                      fontSize: "1.2rem",
                      marginTop: "3px",
                    }}
                  />
                </button>
              </li>
              {/* signOut */}
              <li className="nav-item" style={signOutStyle}>
                <button
                  className="btn "
                  onClick={() => {
                    auth.signOut();

                    props.isSignInButton();
                  }}>
                  <i
                    className="fas fa-sign-out-alt"
                    style={{
                      color: "#a8a8a8",
                      fontSize: "1.2rem",
                      marginTop: "3px",
                    }}
                  />
                </button>
              </li>
              {/* search */}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-search" />
                </a>
              </li>
              {/* user profile */}
              <li className="nav-item">
                <a className="nav-link" href="UserSignedIn">
                  <i className="fas fa-user" />
                </a>
              </li>
              {/* site menu list */}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="far fa-list-alt" />
                </a>
              </li>

              {/* site contact us */}
              <li className="nav-item">
                <a className="nav-link" href="ContactUs">
                  <i className="fas fa-comment-alt" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
