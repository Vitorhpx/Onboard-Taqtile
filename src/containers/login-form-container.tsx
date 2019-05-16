import * as React from "react"
import gql from "graphql-tag"
import { Mutation, MutationResult } from "react-apollo"
import { AUTH_TOKEN } from "../constants"
import { navigate } from "gatsby"
import LoginForm from "../components/login-form"
import { MutationOptions } from "apollo-client"

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    Login(data: { email: $email, password: $password, rememberMe: true }) {
      token
    }
  }
`
interface LoginFormContainerProps {}

export default class LoginFormContainer extends React.Component<any, any> {
  render() {
    return (
      <Mutation
        mutation={LOGIN_MUTATION}
        onCompleted={data => this.handleCompleted(data)}
      >
        {(
          mutate: (options?: MutationOptions) => Promise<any>,
          result: MutationResult
        ) => {
          return this.props.render(this.submitCallback(mutate), result)
        }}
      </Mutation>
    )
  }

  submitCallback = (mutate: (variables) => Promise<any>) => {
    return async (email: string, password: string) => {
      await mutate({
        variables: { email: email, password: password },
      })
    }
  }

  handleCompleted = data => {
    const { token } = data.Login
    localStorage.setItem(AUTH_TOKEN, token)
    navigate("/UserListPage")
  }
}
