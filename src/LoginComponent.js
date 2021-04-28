import { Component } from "react";
import './Login.css';
import facebooklogo from './images/facebooklogo.png';
import instagram3 from './images/instagram3.jpg';
import google2 from './images/google2.png';


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
            <div >
               
                <aside className= "form2" onSubmit={this.handleSubmit}>
               <div className = "Loginwith"> <h1>Login With:</h1></div>
                    <div className= "input-btn2">
                    {/* <!-- Facebook --> */}
                    <img src ={facebooklogo} alt =""/>
                    </div>
                    <div className= "input-btn2">
                    <img src ={instagram3} alt =""/>
                    </div>
                    <div className= "input-btn2">
                    <img src ={google2} alt =""/>
                      </div>
                      <div>
                      <div className= "emailbox">
                      <label htmlFor='email'>Or Enter Your Email:</label>
                      </div>
                      </div>
                    <div className= "input-btn2">
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            name='email'
                            placeholder='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className= "input-btn2">
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            name='password'
                            placeholder='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit"  className= "input-btn2">Submit</button>
                    <button type="create"  className= "input-btn2">Create Account?</button>
                    
                </aside>
        </div>
        )
    }
}
export default Login;