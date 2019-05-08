import React from 'react';
import {Hello}  from '../components/Hello';
import { Login } from '../containers/Login';
import "../styles/styles.css";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://tq-template-server-sample.herokuapp.com/graphql"
});

export default () =>
              <ApolloProvider client={client}>
                <div className = "root">
                      <Login/>
                  </div>
              </ApolloProvider>



