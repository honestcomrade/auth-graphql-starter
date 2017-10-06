import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';
import AuthForm from './AuthForm';
import mutation from '../mutations/Signup';
import query from '../queries/currentUser';

class SignupForm extends Component{
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  };

  componentWillUpdate(nextProps) {
    // send not newly signedup user to dashboard
    if(!this.props.data.user && nextProps.data.user){
      hashHistory.push('/dashboard');
    }
  }

  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    }).catch(res => { 
      // catch errors int he response
      const errors = res.graphQLErrors.map(error => error.message);
      // add them to the state with ES6 candy, to return to user
      this.setState({ errors });
    });
  }

  render() {
    return(
      <div className="container">
        <h3>Signup</h3>
        <AuthForm 
          errors={ this.state.errors }
          onSubmit={ this.onSubmit.bind(this) } />
      </div>
    )
  }
}

// wierd syntax to wrap the form with 
// a mutation and query for refetch
export default graphql(query)(
  graphql(mutation)(SignupForm)
);