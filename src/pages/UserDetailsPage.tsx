import * as React from "react"
import { gql } from "apollo-boost"
import { Query, QueryResult } from "react-apollo"
import { Layout } from "../layout"
import { string } from "prop-types"
import { UserCard } from "../containers/user-card"
import { PAGEOFFSET } from "../constants"
import { UserCardFullInfo } from "../containers/user-card-full-info";


const GETUSER = gql`
  query getUser($id: Int!){
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
  id: string,
  name: string,
  cpf: string,
  birthDate: string,
  email: string,
  role: string
}

type Response = {
  User: User
}

export default class UserDetailsPage extends React.Component<
  any,
  any
> {
  constructor(props) {
    super(props)
    this.state = {
      id: "0",
    }
  }

  render() {
    return (
      <Layout>
        <Query
          query={GETUSER}
          variables={{ id: this.props.location.state.id}}
        >
          {(response: QueryResult<Response>) => {
            if (response.loading) return <p className="Loading">Loading...</p>
            if (response.error) return `Error! ${response.error.message}`
            return <UserCardFullInfo
            email={response.data.User.email}
            name={response.data.User.name}
            birthDate={response.data.User.birthDate}
            role={response.data.User.role}
            id={response.data.User.id}
            cpf={response.data.User.cpf}
          />
          }}
        </Query>
      </Layout>
    )
  }

  handleCheck = (id: string) => {
    console.log(this.props.location.state.id);
  }
}

/*

        <Query
          query={GETUSER}
          variables={{ }}
        >
          {(response: QueryResult<Response>) => {
            if (response.loading) return <p className="Loading">Loading...</p>
            if (response.error) return `Error! ${response.error.message}`
            return response.data.Users.nodes.map((user, index) => {
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
          }}
        </Query>

*/
