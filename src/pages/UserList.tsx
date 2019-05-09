import * as React from 'react';
import {gql} from "apollo-boost";
import { Query, QueryResult } from 'react-apollo';
import { Layout } from '../layout';
import { string } from 'prop-types';
import {UserCard} from '../containers/user-card'

const USERS_QUERY = gql`
  query getUsers{
    Users{
      nodes {
        name
        email
      }
    }
  }
`
type User = {
  name: string;
  email: string;
};
type Users ={
  nodes: User[];
}

type Response = {
  Users: Users
}


interface UserListProps {
}

interface UserListState {
}

export default class UserList extends React.Component<UserListProps, UserListState> {
    constructor(props) {
        super(props);
      }

    render(){
      return(
        <Layout>
          <Query query = {USERS_QUERY}>{(response: QueryResult<Response>) => {
            if (response.loading) return "Loading...";
            if (response.error) return `Error! ${response.error.message}`;
            return (
              response.data.Users.nodes.map(function (user, index) {
                return <UserCard email = {user.email} username = {user.name} key = {index}></UserCard>
              })
            )
            }}
          </Query>
        </Layout>

      );
    }
};
