import React, { useState } from "react";
import LoginComponent from "./LoginComponent";
import "../css/LoginPopUPComponent.css";

const LoginPopUPComponent = (props) => {
  const [isPopUpToggle, setPopUpToggle] = useState(true);

  return (
    <div className="popup-box">
      <div className="box">
        <LoginComponent
          popUpToggle={(isPopUpToggle) => {
            setPopUpToggle(isPopUpToggle);
            props.popUpToggle2(false);
          }}
        />
      </div>
    </div>
  );
};

export default LoginPopUPComponent;
