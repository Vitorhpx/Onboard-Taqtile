import * as React from "react"

interface UserCardProps {
  username: string
  email: string
  id: string
  className: string
  onCardSelect: (id: string) => void
}

export class UserCard extends React.Component<UserCardProps, any> {
  render() {
    return (
      <div
        className={this.props.className}
        onClick={this.handleClick}
        id={this.props.id}
      >
        <h4>
          <b>User: &nbsp; </b>{this.props.username}
        </h4>
        <p><b>Email: </b>{this.props.email}</p>
      </div>
    )
  }

  private handleClick = () => this.props.onCardSelect(this.props.id)
}
