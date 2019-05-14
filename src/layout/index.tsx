import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from '../apollo/apollo-client';
import { StyledHeader } from '../components/header-styled';
import "./global.css"
import { StyledFooter } from '../components/footer-styled';

export class Layout extends React.Component {
    render(){
        return(
          <div className="site">
            <StyledHeader>User List Gatsby</StyledHeader>
            <div className="site-content">{this.props.children}</div>
            <StyledFooter></StyledFooter>
          </div>
        );
    };
};

