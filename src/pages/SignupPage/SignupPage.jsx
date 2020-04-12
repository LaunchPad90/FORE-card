import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';


class SignupPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='SignupPage'>
        <SignupForm {...this.props} />
      </div>
    );
  }
}

export default SignupPage;