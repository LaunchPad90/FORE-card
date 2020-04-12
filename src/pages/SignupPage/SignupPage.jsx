import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';


class SignupPage extends Component {
  render() {
    return (
      <div className='SignupPage'>
        <SignupForm {...this.props} />
      </div>
    );
  }
}

export default SignupPage;