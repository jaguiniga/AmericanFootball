import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="row" style={{ marginBottom: "5px" }}>
          {/* Column2 */}
          <div className="col-sm">
            <ui className="list-unstyled">
              <div className="ft-text">
                <li>
                  <a href="url" className="ft-link">
                    <NavLink exact activeClassName="active-link" to="/about">
                      {" "}
                      ABOUT{" "}
                    </NavLink>
                  </a>
                </li>
              </div>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col-sm">
            <ui className="list-unstyled">
              <div className="ft-text">
                {" "}
                <li>
                  <a href="url" className="ft-link">
                    <NavLink exact activeClassName="active-link" to="/help">
                      {" "}
                      HELP CENTER{" "}
                    </NavLink>
                  </a>
                </li>
              </div>
            </ui>
          </div>
          <div className="col-sm">
            <ui className="list-unstyled">
              <div className="ft-text">
                {" "}
                <li>
                  <a href="url" className="ft-link">
                    <NavLink
                      exact
                      activeClassName="active-link"
                      to="/termsrules">
                      {" "}
                      TERMS OF SERVICE/RULES{" "}
                    </NavLink>
                  </a>
                </li>
              </div>
            </ui>
          </div>{" "}
          <div className="col-sm">
            <ui className="list-unstyled">
              <div className="ft-text">
                {" "}
                <li>
                  <a href="url" className="ft-link">
                    <NavLink exact activeClassName="active-link" to="/privacy">
                      PRIVACY POLICY{" "}
                    </NavLink>
                  </a>
                </li>
              </div>
              {/* Column2 */}
            </ui>
          </div>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <p className="col-lg">
            © 2021 All Rights Reserved ~ Authored by PJ'S
          </p>
        </div>
      </div>
    );
  }
}
