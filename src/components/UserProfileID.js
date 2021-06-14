import React, { useContext } from "react";
import { UserContext } from "../auth/UserProvider";
import { auth } from "../Firebase/firebase";

import "../css/Headlines.css";
import "../css/Videos.css";

const UserProfileID = () => {
  const user = useContext(UserContext);
  const currentUserDisplayname = user ? user.displayName : "";

  return (
    <div
      className="card border-secondary mb-3"
      style={{
        maxWidth: "18rem",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}>
      <div className="card-header">
        <div
          className="mx-auto"
          style={{
            width: "260px",
            background: "#f8f9fa",
          }}>
          <div>
            <img
              src="https://bootdey.com/img/Content/avatar/avatar2.png"
              className="rounded-circle img-thumbnail"
              style={{ height: "70px", width: "70px", float: "left" }}
              alt="avatar"
            />
          </div>
          <div
            style={{
              height: "80px",
              width: "150px",
              display: "table-cell",
              textAlign: "center",
              verticalAlign: "middle",
            }}>
            <h3>
              <b>{`${currentUserDisplayname}`}</b>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileID;
