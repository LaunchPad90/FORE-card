import React, { Component } from 'react'
import userService from '../../utils/userService'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';



const styles = {
    buttonStyle: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  };

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
        const { classes } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='name' placeholder='name' onChange={this.handleChange}/>
                <input type='email' name='email' placeholder='email' onChange={this.handleChange} />
                <input type='password' name='password' placeholder='password' onChange={this.handleChange} />
                <input type='password' name='passwordConf' placeholder='confirm password' onChange={this.handleChange} />
                <button  className={ classes.buttonStyle } disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
                <Link to='/' >Cancel</Link>
            </form>
        )
    }
}

SignupForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };


export default withStyles(styles)(SignupForm);