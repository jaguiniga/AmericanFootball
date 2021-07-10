import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../auth/UserProvider";
import { auth, storage, firestore } from "../Firebase/firebase";
import "../App.css";
import { NavLink } from "react-router-dom";


const ProfilePage = () => {
  const {user, logout} = useContext(UserContext);
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [userData, setUserData] = useState(null);

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  // const [team, SetTeam] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  const chooseFile = (e) => {
    setFile(e.target.files[0]);
  };



  /* const handleUpdate = async() => {
    let imgUrl = await uploadImage();

    if ( imgUrl == null && userData.userImg ) {
      imgUrl = userData.userImg;
    }
    firestore()
    .collection("users")
    .doc(user.uid)
    .update({
        displayName,
        email,
        photoURL,
        ...additionalData,
    })

  };
 */
  const getUser = async() => {
    const currentUser = await firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then((documentSnapshot) => {
      if (documentSnapshot.exists){
        setUserData(documentSnapshot.data());

      }
    })
  }

  /* const useEffect(() => {
    getUser();
    
  }, []);

 */

  const currentUserEmail = user ? user.email : "";
  const currentUserDisplayname = user ? user.displayName : "";
  const currentPhoto = user ? user.photoURL : "";


  return (
    <div>
      <form
            className="form"
            style={{ backgroundColor: "#edeef0", height: "80vh" }}>
            <h2>
              <b>American Football🏈</b>
            </h2>
            <h3>Create Account</h3>

            <div className="input-btn">
              <label htmlFor="displayName" style={{ marginRight: "10px" }}>
                UserName
              </label>
              <input
                type="text"
                name="displayName"
                placeholder="username"
                value={displayName}
                id="displayName"
                onChange={(event) => onChangeHandler(event)}
              />
            </div>

            <div className="input-btn">
              <label htmlFor="userEmail" style={{ marginRight: "10px" }}>
                Email
              </label>
              <input
                type="email"
                name="userEmail"
                placeholder="email"
                value={email}
                id="userEmail"
                onChange={(event) => onChangeHandler(event)}
              />
            </div>

            <div className="input-btn">
              <label htmlFor="userPassword" style={{ marginRight: "10px" }}>
                Password
              </label>
              <input
                type="password"
                name="userPassword"
                placeholder="password"
                value={password}
                id="userPassword"
                onChange={(event) => onChangeHandler(event)}
              />
            </div>

            <div className="input-btn">
              <label for="photoURL" style={{ marginRight: "10px" }}>
                Upload Image
              </label>
              <input
                type="file"
                name="photoURL"
                id="photoURL"
                onChange={(e) => chooseFile(e)}
              />
            </div>
            <button
              className="input-btn"
              style={{ width: "300px" }}
             >
              Create Account
            </button>

            <div>
              <p>Already Registered ?</p> <NavLink to="/">Login</NavLink>
            </div>
          </form></div>
  );
};

export default ProfilePage;
