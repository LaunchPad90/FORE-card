import React, { Component } from 'react'
import userService from '../../utils/userService'
import { Link } from 'react-router-dom';


class SignupForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        passwordConf: ''
    } 

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await userService.signup(this.state)
            this.props.handleSignupOrLogin();
            console.log('success')
        }
        catch(err) {
            console.log(err)
        }
    }

    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='name' placeholder='name' onChange={this.handleChange}/>
                <input type='email' name='email' placeholder='email' onChange={this.handleChange} />
                <input type='password' name='password' placeholder='password' onChange={this.handleChange} />
                <input type='password' name='passwordConf' placeholder='confirm password' onChange={this.handleChange} />
                <button className="btn btn-default" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
                <Link to='/' >Cancel</Link>
            </form>
        )
    }
}


export default SignupForm;