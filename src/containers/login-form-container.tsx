import * as React from "react"
import { gql } from "apollo-boost"
import { Mutation, MutationResult } from "react-apollo"
import { AUTH_TOKEN } from "../constants"
import { Layout } from "../layout"
import { navigate } from "gatsby"
import { Validator } from "../utils/validator"
import { Field } from "../components/field"
import { Button } from "../components/styled-button"
import { Title } from "../components/title"
import { StyledForm } from "../components/form-styled"
import { ErrorMessage } from "../components/error-message";
import { LoadingMessage } from "../components/loading-message";
import LoginForm from "../components/login-form";

interface LoginFormContainerState {
  submitted: boolean
  email: string
  password: string
  isEmailValid: boolean
  isPasswordValid: boolean
  errorMessage: string
}

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    Login(data: { email: $email, password: $password, rememberMe: true }) {
      token
    }
  }
`

export default class LoginFormContainer extends React.Component<any, LoginFormContainerState> {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false,
      email: "",
      password: "",
      isEmailValid: false,
      isPasswordValid: false,
      errorMessage: "",
    }
  }

  render() {
    const { submitted } = this.state
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
