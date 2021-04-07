import { Component } from "react";
import './App.css';

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
                <h1>Login With:</h1>
                <form className= "form" onSubmit={this.handleSubmit}>
                    <div className= "input-btn">
                    <label htmlFor='text'>Facebook</label>
                        <input
                            type='text'
                            name='Facebook'
                            placeholder='Facebook'
                            value={this.state.facebook}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className= "input-btn">
                    <label htmlFor='text'>Instagram</label>
                        <input
                            type='text'
                            name='Instagram'
                            placeholder='Instagram'
                            value={this.state.instagram}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className= "input-btn">
                    <label htmlFor='google'>Google</label>
                        <input
                            type='text'
                            name='Google'
                            placeholder='Google'
                            value={this.state.Google}
                            onChange={this.handleChange}
                        />
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
                </form>
        </div>
        )
    }
}
export default Login;