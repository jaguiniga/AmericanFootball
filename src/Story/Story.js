import React, {useContext} from "react";
import { Avatar} from "@material-ui/core";
import "./Story.css";
import { UserContext } from "../auth/UserProvider";

function Story({image, profileSrc, title}) {
 const user = useContext(UserContext);

  const currentUserDisplayname = user ? user.displayName : "";
  const currentPhoto = user ? user.photoURL : "";

    return (
        <div>
            <div style={{backgroundImage: `url(${image})` }}
                className="story">
                <Avatar className="story__avatar" src={profileSrc } />
                <h4>{title}</h4>
            </div>
        </div>
    );
}

export default Story;