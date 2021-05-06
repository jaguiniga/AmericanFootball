import React, {useState, useEffect, Fragment, useCOntext } from 'react';
import firebase from './firebase';
import {v4 as uuidv4 } from 'uuid';
import { AuthContext } from './auth/Auth';

function SnapShotFirebase() {
    const { currentUser } = useContext(AuthContext);
    const currentUserId = currentUser ? currentUser.uid : null;
    const []
}