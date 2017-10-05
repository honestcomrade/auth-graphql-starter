import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import AuthForm from './AuthForm';
import mutation from '../mutations/Login';
import query from '../queries/currentUser'

class LoginForm extends Component{
  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    });
  }

  render() {
    return(
      <div className="container">
        <h3>
          Login
        </h3>
        < AuthForm onSubmit={ this.onSubmit.bind(this) } />
      </div>
    )
  }
}

export default graphql(mutation)(LoginForm);