import * as React from "react"
import gql from "graphql-tag"
import { Query, QueryResult } from "react-apollo"
import { Layout } from "../layout"
import { StyledUserCardFullInfo } from "../components/user-card-full-info-styled"
import { Link } from "gatsby"
import { Button } from "../components/styled-button"
import { UserCardFullInfo } from "../components/user-card-full-info"
import { StyledUserList } from "../components/user-list-styled"

const GETUSER = gql`
  query getUser($id: Int!) {
    User(id: $id) {
      id
      name
      cpf
      birthDate
      email
      role
    }
  }
`
type User = {
  id: string
  name: string
  cpf: string
  birthDate: string
  email: string
  role: string
}

type Response = {
  User: User
}

export default class UserDetailsPage extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      id: "0",
    }
  }

  render() {
    if (!this.props.location.state) {
      return null
    }
    return (
      <Layout>
        <StyledUserList>
          <Query
            query={GETUSER}
            variables={{ id: this.props.location.state.id }}
          >
            {(response: QueryResult<Response>) => {
              const user = response.data.User
              if (response.loading) return <p className="Loading">Loading...</p>
              if (response.error) return `Error! ${response.error.message}`
              return (
                <UserCardFullInfo
                  email={user.email}
                  name={user.name}
                  birthDate={user.birthDate}
                  role={user.role}
                  id={user.id}
                  cpf={user.cpf}
                />
              )
            }}
          </Query>
          <Link to={"/UserListPage"}>
            <Button className="BackButton"> Back</Button>
          </Link>
        </StyledUserList>
      </Layout>
    )
  }

  handleCheck = (id: string) => {
    console.log(this.props.location.state.id)
  }
}
