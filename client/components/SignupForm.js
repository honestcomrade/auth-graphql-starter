import React, { Component } from 'react'
import AuthForm from './AuthForm';

class SignupForm extends Component{
  render() {
    return(
      <div className="container">
        <h3>
          Signup
        </h3>
        < AuthForm />
      </div>
    )
  }
}

export default SignupForm;