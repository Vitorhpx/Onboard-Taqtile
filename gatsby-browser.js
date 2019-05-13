import React from 'react';
import { client } from './src/apollo/apollo-client';
import { ApolloProvider } from 'react-apollo';

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);
