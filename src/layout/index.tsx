import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from '../apollo/apollo-client';
import { StyledHeader } from '../components/header-styled';
import "./global.css"

export class Layout extends React.Component {
    render(){
        return(
          <>
            <StyledHeader>User List Gatsby</StyledHeader>
            {this.props.children}
          </>
        );
    };
};

