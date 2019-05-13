import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from '../apollo/apollo-client';
import { StyledHeader } from '../components/header-styled';

export class Layout extends React.Component {
    render(){
        return(
          <ApolloProvider client={client}>
            <StyledHeader>Meu</StyledHeader>
            {this.props.children}
          </ApolloProvider>
        );
    };
};

