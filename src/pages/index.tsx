
import React from 'react';
import {Hello}  from '../components/Hello';
import { Login } from '../pages/Login';
import { UserList } from '../pages/UserList';
import "../styles/styles.css";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const client = new ApolloClient({
  uri: "https://tq-template-server-sample.herokuapp.com/graphql"
});

export default () =>
              <Router>
                <ApolloProvider client={client}>
                  <div className = "root">
                  </div>
                <Route path="/" exact component={Login} />
                <Route path="/UserList/" component={UserList} />
                </ApolloProvider>
                </Router>


