import React, { Component } from 'react'
import userService from '../../utils/userService';
import { Link } from 'react-router-dom';

class LoginPage extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
          // Using ES2015 Computed Property Names
          [e.target.name]: e.target.value
        });
      }    

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await userService.login(this.state);
          this.props.handleSignupOrLogin();
          this.props.history.push('/');
          console.log('submit from loginpage')
        } catch (err) {
          alert('Invalid Credentials!');
        }
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='email' name='email' placeholder='email' onChange={this.handleChange} />
                <input type='password' name='password' placeholder='password' onChange={this.handleChange} />
                <input type='submit'></input>
                <Link to='/'>Cancel</Link>
            </form>
        )
    }
}

export default LoginPage;