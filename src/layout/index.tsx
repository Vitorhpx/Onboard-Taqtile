import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from '../apollo/apollo-client';

export class Layout extends React.Component {
    render(){
        return(
          <ApolloProvider client={client}>
            {this.props.children}
          </ApolloProvider>
        );
    };
};
