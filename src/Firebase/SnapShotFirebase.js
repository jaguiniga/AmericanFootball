import React, {useState, useEffect, Fragment, useContext } from 'react';
import firebase from './firebase';
import {v4 as uuidv4 } from 'uuid';
import { AuthContext } from './auth/Auth';

function SnapShotFirebase() {
    const { currentUser } = useContext(AuthContext);
    const currentUserId = currentUser ? currentUser.uid : null;
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [team, setTeam] = useState('');
    

    const ref = firebase.firestore().collection('users');

    useEffect(() => {
        getUsers();
        // eslint-disable-next-line
      }, []);

      // ADD FUNCTION
      function addUser() {
          const owner = currentUser ? currentUser.uid : 'unknown';
          const ownerEmail = currentUser ? currentUser.email : 'unknown';
          const newUser = {
              userName,
              //email,
              password,
              team,
              score: +score,
              id: uuidv4(),
              owner,
              ownerEmail,
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
              lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
          };

          ref
            .doc(newUser.id)
            .set(newUser)
            .catch((err) => {
                console.error(err);
            });
        }

        // DELETE FUNCTION
        function deleteUser(user) {
            ref
                .doc(user.id)
                .delete()
                .catch((err) => {
                    console.error(err);
                });
        }

        // EDIT FUNCTION
        function editUser(user) {
            const updateUser = {
                score: +score,
                lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
              };
              setLoading();
              ref
                .doc(school.id)
                .update(updatedSchool)
                .catch((err) => {
                  console.error(err);
                });
        }




}