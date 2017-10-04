import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/currentUser';

const getUser = (user) => {
  while (!this.props.data.loading) {

  }
};

class Header extends Component {

  render() {
    console.log(this.props.data);
    return(
      <div>
        Header
      </div>
    );
  }
};

export default graphql(query)(Header);