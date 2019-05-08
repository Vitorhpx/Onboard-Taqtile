import * as React from 'react';

interface UserCardProps {
  username:string,
  email:string,
}

interface UserCardState {
}

export class UserCard extends React.Component<UserCardProps, UserCardState> {
    constructor(props) {
        super(props);

      }

    render(){
      return(
      <div className="UserCard">
        <h4><b>User: {this.props.username}</b></h4>
        <p>Email: {this.props.email}</p>
      </div>
    );
    }
};
