import * as React from "react"
import { StyledH4 } from "./h4-styled";
import { StyledP } from "./p-styled";

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
        <StyledH4>
          <b>User: </b>{this.props.username}
        </StyledH4>
        <StyledP><b>Email: </b>{this.props.email}</StyledP>
      </div>
    )
  }

  private handleClick = () => this.props.onCardSelect(this.props.id)
}
