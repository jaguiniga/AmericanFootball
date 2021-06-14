import React, { useRef, useState, useContext } from "react";
import { auth } from "../Firebase/firebase";
import { UserContext } from "../auth/UserProvider";
import { useAuthState } from "react-firebase-hooks/auth";
import GoogleAdCard from "./GoogleAdCard";

import UserProfileID from "./UserProfileID";

// message sender
function UserProfileMain() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <section>{user ? <UserProfileID /> : <GoogleAdCard />}</section>
    </div>
  );
}

export default UserProfileMain;
