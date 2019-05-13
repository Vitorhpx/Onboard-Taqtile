import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from '../apollo/apollo-client';
import { StyledH1 } from '../components/h1-styled';
import Header from '../components/header';
import { StyledHeader } from '../components/header-styled';

export class Layout extends React.Component {
    render(){
        return(
          <ApolloProvider client={client}>
            <StyledHeader>Meu titulo</StyledHeader>
            {this.props.children}
          </ApolloProvider>
        );
    };
};
