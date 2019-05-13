import * as React from "react"
import { gql } from "apollo-boost"
import { Layout } from "../layout"
import LoginFormContainer from "../containers/login-form-container";

interface LoginPageState {
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

export default class LoginPage extends React.Component<any, LoginPageState> {
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
      <Layout>
      <LoginFormContainer></LoginFormContainer>
      </Layout>
    )
  }
}
