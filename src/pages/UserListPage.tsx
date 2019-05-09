import * as React from "react"
import { gql } from "apollo-boost"
import { Query, QueryResult } from "react-apollo"
import { Layout } from "../layout"
import { string } from "prop-types"
import { UserCard } from "../containers/user-card"
import {PAGEOFFSET} from "../constants"

interface UserListPageState {
  limit: number
  offset: number
  loading: boolean
}

const USERS_QUERY = gql`
  query getUsers($limit: Int, $offset: Int) {
    Users(limit: $limit, offset: $offset) {
      nodes {
        name
        email
      }
    }
  }
`
type User = {
  name: string
  email: string
}
type Users = {
  nodes: User[]
}

type Response = {
  Users: Users
}

export default class UserListPage extends React.Component<
  any,
  UserListPageState
> {
  constructor(props) {
    super(props)
    this.state = {
      limit: 10,
      offset: 0,
      loading: false,
    }
  }

  render() {
    return (
      <Layout>
        <Query
          query={USERS_QUERY}
          variables={{ limit: this.state.limit, offset: this.state.offset }}
        >
          {(response: QueryResult<Response>) => {
            if (response.loading) return <p className="Loading">Loading...</p>
            if (response.error) return `Error! ${response.error.message}`
            return response.data.Users.nodes.map(function(user, index) {
              return (
                <UserCard email={user.email} username={user.name} key={index} />
              )
            })
          }}
        </Query>
        <button className="PageButton" onClick={this.handlePreviousPage}>
          Previous Page
        </button>
        <button className="PageButton" onClick={this.handleNextPage}>
          Next Page
        </button>
      </Layout>
    )
  }

  handlePreviousPage = () => {
    this.setState({
      offset: this.state.offset - PAGEOFFSET,
    })
  }

  handleNextPage = () => {
    this.setState({
      offset: this.state.offset + PAGEOFFSET,
    })
  }

}
