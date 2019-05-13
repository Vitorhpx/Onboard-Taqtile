import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from '../apollo/apollo-client';
import { StyledH1 } from '../components/h1-styled';

export class Layout extends React.Component {
    render(){
        return(
          <ApolloProvider client={client}>
            <StyledH1>Taqtile</StyledH1>
            {this.props.children}
          </ApolloProvider>
        );
    };
};
