import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import "firebase/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const Config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_MESSAGING_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// initilaize firebase
firebase.initializeApp(Config);

export const storage = firebase.storage();
export const timestamp1 = firebase.firestore.FieldValue.serverTimestamp();
export const auth = firebase.auth();
export const firestore = firebase.firestore();


/*Tutorial*/
let firebaseCache;

export const getFirebase = () => {
  if (firebaseCache) {
    return firebaseCache;
  }

  firebaseCache = firebase;
  return firebase;
};

const provider1 = new firebase.auth.FacebookAuthProvider();
export const signInWithFacebook = () => {
  auth.signInWithPopup(provider1);
};

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

