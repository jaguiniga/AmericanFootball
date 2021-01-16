import { Component } from "react";


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
            <div>
                <h1>Sign Up Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <label htmlFor='text'>Name: </label>
                        <input
                            type='text'
                            name='username'
                            placeholder='username'
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                    <label htmlFor='email'>Email: </label>
                        <input
                            type='email'
                            name='email'
                            placeholder='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                    <label htmlFor='password'>Password: </label>
                        <input
                            type='text'
                            name='password'
                            placeholder='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='team'>Team: </label>
                        <input
                            type='team'
                            name='team'
                            placeholder='team'
                            value={this.state.team}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button>Submit</button>
                </form>
        </div>
        )
    }
}
export default Form;