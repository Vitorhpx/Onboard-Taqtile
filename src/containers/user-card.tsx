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
        <h4><b>{this.props.username}</b></h4>
        <p>{this.props.email}</p>
      </div>
    );
    }
};
