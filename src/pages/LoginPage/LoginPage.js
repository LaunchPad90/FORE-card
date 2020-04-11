import React, { Component } from 'react'

class LoginForm extends Component {
    render() {
        return (
            <form>
                <input type='email' name='email' placeholder='email' onChange={this.handleChange} />
                <input type='password' name='password' placeholder='password' onChange={this.handleChange} />
                <input type='submit'></input>
            </form>
        )
    }
}

export default LoginForm;