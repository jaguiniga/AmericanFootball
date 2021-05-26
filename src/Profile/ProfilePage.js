import React, { useContext } from "react";
import { UserContext } from "../auth/UserProvider";
import { auth } from "../Firebase/firebase";
import { NavLink } from "react-router-dom";
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

  return (
    <div
      className="mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8"
      style={{
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}>
      <div class="thumb-lg member-thumb mx-auto">
        <img
          src="https://bootdey.com/img/Content/avatar/avatar2.png"
          class="rounded-circle img-thumbnail"
          alt="avatar"
        />
      </div>
      <div>
        <h1>{`${currentPhoto}`}</h1>
      </div>
      <div>
        {" "}
        <h2>{`${currentUserDisplayname}`}</h2>{" "}
      </div>
      <div>
        {" "}
        <h2>{`${currentUserEmail}`}</h2>{" "}
      </div>

      <button
        className="input-btn"
        onClick={() => {
          auth.signOut();
        }}
        NavLink
        to="/">
        Sign out
      </button>
    </div>
  );
};

export default ProfilePage;
