import * as React from "react"

interface UserCardProps {
  username: string
  email: string
  id: string
  onCardSelect: (id: string) => void
}

export class UserCard extends React.Component<UserCardProps, any> {

  render() {
    return (
      <li onClick={this.handleClick} className="UserCard" id={this.props.id}>
        <h4>
          <b>User: {this.props.username}</b>
        </h4>
        <p>Email: {this.props.email}</p>
      </li>
    )
  }

  private handleClick = () => this.props.onCardSelect(this.props.id);
}
