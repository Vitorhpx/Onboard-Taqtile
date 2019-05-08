import * as React from 'react';
import { UserCard } from '../containers/user-card';

interface UserListProps {
}

interface UserListState {
}

export class UserList extends React.Component<UserListProps, UserListState> {
    constructor(props) {
        super(props);
      }

    render(){
      return(
        <div className="UserList">
          <UserCard username = "Vitor" email = "vitor.perles@gmail.com"></UserCard>
          <UserCard username = "Vitor" email = "vitor.perles@gmail.com"></UserCard>
          <UserCard username = "Vitor" email = "vitor.perles@gmail.com"></UserCard>
          <UserCard username = "Vitor" email = "vitor.perles@gmail.com"></UserCard>
          <UserCard username = "Vitor" email = "vitor.perles@gmail.com"></UserCard>
          <UserCard username = "Vitor" email = "vitor.perles@gmail.com"></UserCard>
          <UserCard username = "Vitor" email = "vitor.perles@gmail.com"></UserCard>
          <UserCard username = "Vitor" email = "vitor.perles@gmail.com"></UserCard>
          <UserCard username = "Vitor" email = "vitor.perles@gmail.com"></UserCard>
        </div>
      );
    }
};
