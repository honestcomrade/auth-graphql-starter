import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

import App from './components/App'
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';
import requireAuth from './components/requireAuth';

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    // makes the request do something in the backend?
    credentials: 'same-origin'
  }
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    // wraps everything in the apolloClient
    <ApolloProvider client={ client }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <Route path="/login" component={ LoginForm } />
          <Route path="/signup" component={ SignupForm } />
          {/* wrap the dashboard in the Auth component */}
          <Route path="/dashboard" component={ requireAuth(Dashboard) } />
        </Route>
      </Router>
    </ApolloProvider>
  );
};
// entry component
ReactDOM.render(<Root />, document.querySelector('#root'));
