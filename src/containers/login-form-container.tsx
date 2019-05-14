import * as React from "react"
import  gql from "graphql-tag"
import { Mutation, MutationResult } from "react-apollo"
import { AUTH_TOKEN } from "../constants"
import { navigate } from "gatsby"
import LoginForm from "../components/login-form";


const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    Login(data: { email: $email, password: $password, rememberMe: true }) {
      token
    }
  }
`

export default class LoginFormContainer extends React.Component<any, any> {
  render() {
    return (
        <Mutation
          mutation={LOGIN_MUTATION}
          onCompleted={data => this.handleCompleted(data)}
        >
          {(mutation, result: MutationResult) => (
            <LoginForm mutation={mutation} result={result}></LoginForm>
          )}
        </Mutation>
    )
  }

  handleCompleted = data => {
    const { token } = data.Login
    localStorage.setItem(AUTH_TOKEN, token)
    navigate("/UserListPage")
  }
}
