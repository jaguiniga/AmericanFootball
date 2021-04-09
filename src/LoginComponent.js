import { Component } from "react";
import './Login.css';
import facebooklogo from './assets/facebooklogo.png';
import instagram3 from './assets/instagram3.jpg';
import google2 from './assets/google2.png';
class Login extends Component {
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
            <div>
               
                <aside className= "form2" onSubmit={this.handleSubmit}>
                <h1>Login With:</h1>
                    <div className= "input-btn">
                    <img src ={facebooklogo} alt =""/>
                    </div>
                    <div className= "input-btn">
                    <img src ={instagram3} alt =""/>
                    </div>
                    <div className= "input-btn">
                    <img src ={google2} alt =""/>
                      </div>
                      <div>
                      <div className= "email">
                      <label htmlFor='google'>Or Enter Your Email:</label>
                      </div>
                      </div>
                    <div className= "input-btn">
                        <label htmlFor='team'>Email</label>
                        <input
                            type='text'
                            name='Email'
                            placeholder='Email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className= "input-btn">
                        <label htmlFor='password'>Password</label>
                        <input
                            type='text'
                            name='Password'
                            placeholder='Password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit"  className= "input-btn">Submit</button>
                    <button type="create"  className= "input-btn">Create Account?</button>
                </aside>
        </div>
        )
    }
}
export default Login;