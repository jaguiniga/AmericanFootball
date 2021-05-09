import React, { useState, useEffect, Fragment, useContext } from 'react';
import './App.css';
import catchingfootball from "./images/catchingfootball.jpg";
import Footer from './FooterComponent';
import firebase from './Firebase/firebase';
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from './auth/Auth';
import {NavLink} from "react-router-dom";

function Form () {
    const { currentUser } = useContext(AuthContext);
    const currentUserId = currentUser ? currentUser.uid : null;
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);


    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [team, setTeam] = useState('');
    const [password, setPassword] = useState('');
    
    // Constant for databse fire store connection
    const ref = firebase.firestore().collection('users');

    //REALTIME GET FUNCTION
    function getUsers() {
        setLoading(true);
        ref
            .onSnapshot((querySnapshot) => {
                const items = [];
                querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
        setUsers(items);
        setLoading(false);
      });
    }

    useEffect(() => {
        getUsers();
    // eslint-disable-next-line
    }, []);

    // ADD FUNCTION
    const addUser = (e) => {
    
        const owner = currentUser ? currentUser.uid : 'unknown';
        const ownerEmail = currentUser ? currentUser.email : 'unknown';
        e.preventDefault();
        setLoading(true);

        ref.add({
            username: username,
            email: email,
            team: team,
            password: password,
        })
        .then(() => {
            setLoading(false);
            alert("Your profile has been created👍");
        })
        .catch((error) => {
            alert(error.message);
            setLoading(false);
        });

        setUsername("");
        setEmail("");
        setPassword("");
        setTeam("");
  };

    //DELETE FUNCTION
    function deleteUsers(user) {
        ref
        .doc(user.id)
        .delete()
        .catch((err) => {
            console.error(err);
        });
    }

    // EDIT FUNCTION
    function editUsers(user) {
        const updatedUser = {
        
        lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
        };
        setLoading();
        ref
        .doc(user.id)
        .update(updatedUser)
        .catch((err) => {
            console.error(err);
        });
    }

        return (
            <Fragment>
            <div style = {{backgroundImage: `url(${catchingfootball})`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}>
            <div>
                <form  className= "form" onSubmit={addUser} >
                <h1>Sign Up Form</h1>
                    <div className= "input-btn">
                    <label htmlFor='text'>Name</label>
                        <input
                            type='text'
                            name='username'
                            placeholder='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className= "input-btn">
                    <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            name='email'
                            placeholder='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className= "input-btn">
                    <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            name='password'
                            placeholder='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className= "input-btn">
                        <label htmlFor='team'>Team</label>
                        <input
                            type='team'
                            name='team'
                            placeholder='team'
                            value={team}
                            onChange={(e) => setTeam(e.target.value)}
                        />
                    </div>
                    <button type="submit" className= "input-btn">Create Account</button>

                    <div>
                        <p>Already Registered ?</p> <NavLink to='/'>Login</NavLink>
                    </div>
                </form>

                <div >
                   <Footer/>
                </div> 
                
            </div>
        </div>
        </Fragment>
        );
    
}
export default Form;