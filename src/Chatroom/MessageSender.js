import React, { useRef, useState, useContext } from "react";
import { UserContext } from "../auth/UserProvider";
import { useAuthState } from "react-firebase-hooks/auth";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import Avatar from "@material-ui/core/Avatar";
import Widgets from "./Widgets1";
import { timestamp1, firestore, auth } from "../Firebase/firebase";
import firebase from 'firebase';
var TimeStamp = firebase.firestore.FieldValue.serverTimestamp();
function MessageSender() {
  const user = useContext(UserContext);
  const currentUserDisplayname = user ? user.displayName : "";
  const currentPhoto = user ? user.photoURL : "";

  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // some database stuff
    firestore.collection("posts").add({
      message: input,
      timestamp: timestamp1,
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });

    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={currentPhoto} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`Teamwork makes the dream work., ${currentUserDisplayname}?`}
          />

          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="image URL (Optional)"
          />

          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
