import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/currentUser';
import { Link } from 'react-router';
import mutation from '../mutations/Logout'


class Header extends Component {
  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{
        query
      }]
    });
  } 

  getUser() {
    const { loading, user } = this.props.data;
    if (loading) { return <div />; }
    // query complete, check user

    if(user) {
      return(
        <li><a onClick={ this.onLogoutClick.bind(this) }>Logout</a></li>
      )
    } else {
      return(
        <div>
          <li>
            <Link to="/signup">
              Create Account
            </Link>
          </li>
          <li>
            <Link to="/login">  
              Login
            </Link>
          </li>
        </div>
      )
    }
  };
  
  render() {
    return(
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">
          { this.getUser() }
          </ul>
        </div>
      </nav>
    );
  }
};

export default graphql(mutation)(
  graphql(query)(Header)
);