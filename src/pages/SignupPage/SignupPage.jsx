import React, { Component } from 'react'
import userService from '../../utils/userService'
import { Link } from 'react-router-dom';


class SignupPage extends Component {
    state = {
        name: '',
        email: '',
        password: '',
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

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='name' placeholder='name' onChange={this.handleChange}/>
                <input type='email' name='email' placeholder='email' onChange={this.handleChange} />
                <input type='password' name='password' placeholder='password' onChange={this.handleChange} />
                <input type='submit'></input>
                <Link to='/' >Cancel</Link>
            </form>
        )
    }
}


export default SignupPage;