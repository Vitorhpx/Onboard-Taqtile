import { Users } from "../containers/user-list-container"
import React from "react"
import { navigate } from "gatsby"
import { UserCard } from "./user-card"

interface UserListProps {
  users: Users
}

export class UserList extends React.Component<UserListProps, any> {
  render() {
    return this.props.users.nodes.map((user, index) => {
      return (
        <UserCard
          email={user.email}
          username={user.name}
          id={user.id}
          key={index}
          onCardSelect={this.handleCheck}
        />
      )
    })
  }
  handleCheck = (id: string) => {
    navigate("/UserDetailsPage/", { state: { id } })
  }
}
