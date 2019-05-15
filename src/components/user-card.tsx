import * as React from "react"
import { H4 } from "./h4-styled"
import { P } from "./p-styled"
import { StyledUserCard } from "./user-card-styled"

interface UserCardProps {
  username: string
  email: string
  id: string
  onCardSelect: (id: string) => void
}

export class UserCard extends React.Component<UserCardProps, any> {
  render() {
    return (
      <StyledUserCard onClick={this.handleClick} id={this.props.id}>
        <H4>
          <b>User: </b>
          {this.props.username}
        </H4>
        <P>
          <b>Email: </b>
          {this.props.email}
        </P>
      </StyledUserCard>
    )
  }

  private handleClick = () => this.props.onCardSelect(this.props.id)
}
