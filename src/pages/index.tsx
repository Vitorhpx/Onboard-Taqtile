
import React from 'react';
import {Hello}  from '../components/Hello';
import { Login } from '../pages/Login';
import { UserList } from '../pages/UserList';
import "../styles/styles.css";
import { ApolloProvider } from "react-apollo";
import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {AUTH_TOKEN} from "../constants"

const httpLink = new HttpLink({ uri: "https://tq-template-server-sample.herokuapp.com/graphql" });

const authLink = new ApolloLink((operation, forward) => {

  const token = localStorage.getItem(AUTH_TOKEN);

  if(token != null){
    operation.setContext({

      headers: {
        authorization: token
      }
    });
  }

  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache()
});

export default () =>
              <Router>
                <ApolloProvider client={client}>
                <Route path="/" exact component={Login} />
                <Route path="/UserList/" component={UserList} />
                </ApolloProvider>
              </Router>


