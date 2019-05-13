import * as React from "react"
import { gql } from "apollo-boost"
import { Query, QueryResult } from "react-apollo"
import { Layout } from "../layout"
import { string } from "prop-types"
import { UserCard } from "../components/user-card"
import { navigate } from "gatsby"
import UserListContainer from "../containers/user-list-container";
import { Button } from "../components/styled-button";

interface UserListPageState {
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
type User = {
  name: string
  email: string
  id: string
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
      offset: 0
    }
  }

  render() {
    return (
      <Layout>
        <UserListContainer limit={this.state.limit} offset={this.state.offset}></UserListContainer>
        <Button className="PageButton" onClick={this.handlePreviousPage}>
          Previous Page
        </Button>
        <Button className="PageButton" onClick={this.handleNextPage}>
          Next Page
        </Button>
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
