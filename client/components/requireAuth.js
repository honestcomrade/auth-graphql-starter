import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { graphql } from 'react-apollo';
import query from '../queries/currentUser';

export default (WrappedComponent) => {
  // wrap every component inside a RequireAuth
  class RequireAuth extends Component {
    // fire this after every query
    componentWillUpdate(nextProps) {
      console.log(nextProps.data.loading, nextProps.data.user);
      if(!nextProps.data.loading && !nextProps.data.user) {
        hashHistory.push('/login');
      }
    }

    render() {
      // wrap every component inside a RequireAuth
      return <WrappedComponent {...this.props} />;
    }
  }

  // we must RETURN the query, not export it
  return graphql(query)(RequireAuth);
};