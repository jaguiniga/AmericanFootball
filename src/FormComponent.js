import { Component } from "react";
import './App.css';
import catchingfootball from "./images/catchingfootball.jpg";
import Footer from './FooterComponent';

import {NavLink} from "react-router-dom";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", email: "", team:"", password:""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt){
        this.setState({ 
            [evt.target.name]: evt.target.value
        });
        
    }
    handleSubmit(evt){
        evt.preventDefault();
        alert(`You Submitted: ${this.state.username}, ${this.state.email}, ${this.state.team}`);
        this.setState({username: "", email: "", team: "", password: ""});
        };
    
    render() {
        return (
            <div style = {{backgroundImage: `url(${catchingfootball})`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}>
            <div>
                <form className= "form" onSubmit={this.handleSubmit}>
                <h1>Sign Up Form</h1>
                    <div className= "input-btn">
                    <label htmlFor='text'>Name</label>
                        <input
                            type='text'
                            name='username'
                            placeholder='username'
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className= "input-btn">
                    <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            name='email'
                            placeholder='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className= "input-btn">
                    <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            name='password'
                            placeholder='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className= "input-btn">
                        <label htmlFor='team'>Team</label>
                        <input
                            type='team'
                            name='team'
                            placeholder='team'
                            value={this.state.team}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit"  className= "input-btn">Create Account</button>

                    <div>
                        <p>Already Registered ?</p> <NavLink to='/'>Login</NavLink>
                    </div>
                </form>

                <div >
                   <Footer/>
                </div> 
                
            </div>
        </div>
        )
    }
}
export default Form;