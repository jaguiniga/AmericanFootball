import React, { useState } from "react";
import LoginComponent from "./LoginComponent";
import "../css/LoginPopUPComponent.css";

const LoginPopUPComponent = (props) => {
  const [isPopUpToggle, setPopUpToggle] = useState(true);

  return (
    <div className="popup-box">
      <LoginComponent
        popUpToggle={(isPopUpToggle) => {
          setPopUpToggle(isPopUpToggle);
          console.log("lcP" + isPopUpToggle);
          props.popUpToggle2(false);
        }}
      />
    </div>
  );
};

export default LoginPopUPComponent;
