import { Component } from "react";
import { NavLink} from "react-router-dom";
import React, {useState} from "react";
import { auth, signInWithGoogle,signInWithFacebook, generateUserDocument } from "../Firebase/firebase";


function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (event,email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
        setError("Error signing in with password and email!");
          console.error("Error signing in with password and email", error);
        });
      };
      
      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;
        
          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };

    return (
        <div>
               
            <aside className= "form2">
                    
                    <div className = "Loginwith">
                        <strong>Login</strong>
                    </div>
                    
                    <div className= "facebook">
                        {/* <!-- Facebook --> */}
                        <button 
                        onClick={() => {
                            signInWithFacebook();
                          }}
                        className="btn btn-sm btn-facebook btn-block text-uppercase" 
                        type="submit"
                        >

                            <i class="fab fa-facebook-f fa-fw"></i>  Facebook
                        </button>
                    </div>

                    <div className= "instagram">
                        {/* <!-- Instagram --> */}
                        <button className="btn btn-sm btn-instagram btn-block text-uppercase" type="submit">
                            <i className="fab fa-instagram fa-fw"></i>  Instagram
                        </button>
                    </div>
                   
                    <div className= "google">
                         {/* <!-- Google --> */}
                        <button  
                            onClick={() => {
                                signInWithGoogle();
                              }}
                            className="btn btn-sm btn-google btn-block text-uppercase" 
                            type="submit"
                        >
                            <i className="fab fa-google fa-fw"></i>  Google
                        </button>
                    </div>
                    {error !== null && (
                        <div>
                            {error}
                        </div>
                    )}
                <form>
                    
                    <div className= "input-btn2">
                        <label htmlFor='userEmail'>Email</label>
                            <input
                                type='email'
                                name='userEmail'
                                placeholder='email'
                                value={email}
                                id="userEmail"
                                onChange={event => onChangeHandler(event)}
                            />
                    </div>

                    <div className= "input-btn2">
                        <label htmlFor='userPassword'>Password</label>
                        <input
                            type='password'
                            name='userPassword'
                            placeholder='password'
                            value={password}
                            id="userPassword"
                            onChange={(event) => onChangeHandler(event)}
                        />
                    </div>

                    <button 
                        onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}} 
                        className= "input-btn2"
                    >
                    Login
                    </button>
                </form>
                    
                    <p className="forgot-password text-right">
                        <p><strong>
                            <NavLink exact activeClassName="active-link" to="/password">
                                Forgot <a href="#">password?</a>
                            </NavLink>
                            </strong>
                        </p> 
                    </p>
                   
                    <button type="create"  className= "input-btn2">
                        <NavLink exact activeClassName="active-link" to="/form">
                            Create Account ? 
                        </NavLink>
                    </button> 
            </aside>
        </div>
    );
    
};

export default Login;