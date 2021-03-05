import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="row">
          {/* Column2 */}
          <div className="col-sm">
            <ui className="list-unstyled">
              <div className="ft-text">
                <li>
                  <a href="url" className="ft-link">
                    ABOUT
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
                    HELP CENTER
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
                    TERMS OF SERVICE/RULES
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
                    PRIVACY POLICY
                  </a>
                </li>
              </div>
              {/* Column2 */}
            </ui>
          </div>
        </div>
        <div className="row">
          <p className="col-lg">
            © 2021 All Rights Reserved ~ Authored by Sherrod Ware, Poul Nichols,
            Johart Aguina
          </p>
        </div>
      </div>
    );
  }
}