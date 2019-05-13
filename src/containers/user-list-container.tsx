import * as React from "react"
import { gql } from "apollo-boost"
import { Query, QueryResult } from "react-apollo"
import { Layout } from "../layout"
import { string } from "prop-types"
import { UserCard } from "../containers/user-card"
import { navigate } from "gatsby"
import { UserList } from "../components/user-list"

interface UserListContainerProps {
  limit: number
  offset: number
}

const PAGEOFFSET = 10

const USERS_QUERY = gql`
  query getUsers($limit: Int, $offset: Int) {
    Users(limit: $limit, offset: $offset) {
      nodes {
        name
        email
        id
      }
    }
  }
`
export type User = {
  name: string
  email: string
  id: string
}
export type Users = {
  nodes: User[]
}

type Response = {
  Users: Users
}

export default class UserListContainer extends React.Component<
  UserListContainerProps,
  any
> {
  render() {
    return (
        <Query
          query={USERS_QUERY}
          variables={{ limit: this.props.limit, offset: this.props.offset }}
        >
          {(response: QueryResult<Response>) => {
            if (response.loading) return <p className="Loading">Loading...</p>
            if (response.error) return `Error! ${response.error.message}`
            return <UserList users={response.data.Users} />
          }}
        </Query>
    )
  }
}
