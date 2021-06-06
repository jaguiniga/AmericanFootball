import { Component } from "react";
import { NavLink} from "react-router-dom";
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
               <div className = "Loginwith"> Login</div>
                    <div className= "facebook">
                    {/* <!-- Facebook --> */}
                    <button class="btn btn-sm btn-facebook btn-block text-uppercase" type="submit"><i class="fab fa-facebook-f fa-fw"></i>  Facebook</button>
                    </div>
                    {/* <!-- Instagram--> */}
                    <div className= "instagram">
                    <button class="btn btn-sm btn-instagram btn-block text-uppercase" type="submit"><i class="fab fa-instagram fa-fw"></i>  Instagram</button>
                    </div>
                    {/* <!-- Google--> */}
                    <div className= "google">
                    <button class="btn btn-sm btn-google btn-block text-uppercase" type="submit"><i class="fab fa-google fa-fw"></i>  Google</button>
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
                    
                    <p className="forgot-password text-right">
                    <p><strong><NavLink exact activeClassName="active-link" to="/password"> Forgot <a href="#">password?</a>
                               </NavLink></strong>
                    </p> 
                    </p>
                    <button type="submit"  className= "input-btn2">Submit</button>
                    <button type="create"  className= "input-btn2"><NavLink exact activeClassName="active-link" to="/form">Create Account? </NavLink></button>
                    
                </aside>
        </div>
        )
    }
}

export default Login;
