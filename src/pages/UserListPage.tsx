import * as React from "react"
import { Layout } from "../layout/"
import UserListContainer from "../containers/user-list-container"
import { Button } from "../components/styled-button"
import { StyledUserList } from "../components/user-list-styled"
import { Link } from "@reach/router"

interface UserListPageState {
  limit: number
  offset: number
}

const PAGEOFFSET = 10

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
      offset: 0,
    }
  }

  render() {
    return (
      <Layout>
        <StyledUserList>
          <UserListContainer
            limit={this.state.limit}
            offset={this.state.offset}
          />
          <Button className="PageButton" onClick={this.handlePreviousPage}>
            Previous Page
          </Button>
          <Button className="PageButton" onClick={this.handleNextPage}>
            Next Page
          </Button>
          <div>
            <Link to={"/AddUserPage"}>
              <Button className="AddUserButton" CTA>
                {" "}
                Add User
              </Button>
            </Link>
          </div>
        </StyledUserList>
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
