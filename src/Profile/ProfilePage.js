import React, { useContext } from "react";
import { UserContext } from "../auth/UserProvider";
import { auth } from "../Firebase/firebase";
import "../App.css";

const ProfilePage = () => {
  const user = useContext(UserContext);
  const currentUserEmail = user ? user.email : "";
  const currentUserDisplayname = user ? user.displayName : "";
  const currentPhoto = user ? user.photoURL : "";

  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
    rel="stylesheet"></link>;
  console.log(user);

  function SignOut() {
    return (
      auth.currentUser && (
        <button
          className="input-btn"
          onClick={() => {
            auth.signOut();
          }}
          NavLink
          to="/">
          Sign out
        </button>
      )
    );
  }

  return (
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
  );
};

export default ProfilePage;
