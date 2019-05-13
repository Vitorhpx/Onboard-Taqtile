import * as React from "react"

interface UserCardProps {
  username: string
  email: string
  id: string
  className:string
  onCardSelect: (id: string) => void
}

export class UserCard extends React.Component<UserCardProps, any> {

  render() {
    return (
      <div className = {this.props.className}>
      <li onClick={this.handleClick} id={this.props.id}>
        <h4>
          <b>User: {this.props.username}</b>
        </h4>
        <p>Email: {this.props.email}</p>
      </li>
      </div>
    )
  }

  private handleClick = () => this.props.onCardSelect(this.props.id);
}
