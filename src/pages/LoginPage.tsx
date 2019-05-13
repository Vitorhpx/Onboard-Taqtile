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
        <Mutation
          mutation={LOGIN_MUTATION}
          variables={{ email: this.state.email, password: this.state.password }}
          onCompleted={data => this.handleCompleted(data)}
        >
          {(mutation, result: MutationResult) => (
            <StyledForm
              method="post"
              onSubmit={event => {
                this.handleSubmit(mutation, event)
              }}
              noValidate
            >
              <Title>Bem vindo à Taqtile</Title>
              <Field
                canShowError={this.state.submitted && !this.state.isEmailValid}
                onValueChange={this.handleSetEmail}
                onValidChange={this.handleEmailSetValid}
                name="email"
                placeholder="example@email.com"
                text="Email"
                validation={Validator.isEmail}
                errorMessage="Email Inválido"
                type="text"
              />
              <Field
                canShowError={
                  this.state.submitted && !this.state.isPasswordValid
                }
                onValueChange={this.handlePasswordChange}
                onValidChange={this.handlePasswordSetValid}
                name="password"
                placeholder="*******"
                text="Senha"
                validation={Validator.isPassword}
                errorMessage="Deve conter pelo menos 7 caracteres, com 1 alfanumérico e 1 dígito"
                type="password"
              />
              <Button
                type="submit"
                className="LoginButton"
                disabled={result.loading}
              >
                Fazer Login
              </Button>
              {result.error && <ErrorMessage error>{result.error.message}</ErrorMessage>}
              {result.loading && <LoadingMessage loading>Loading...</LoadingMessage>}
            </StyledForm>
          )}
        </Mutation>
      </Layout>
    )
  }
  handleSubmit = async (mutateFunction: Function, event) => {
    event.preventDefault()
    const { name, value } = event.target
    this.setState({
      submitted: true,
    })
    if (this.state.isEmailValid && this.state.isPasswordValid) {
      await mutateFunction()
    }
  }

  handleSetEmail = emailField => {
    this.setState({
      email: emailField,
    })
  }

  handleEmailSetValid = emailValidity => {
    this.setState({
      isEmailValid: emailValidity,
    })
  }

  handlePasswordChange = passwordField => {
    this.setState({
      password: passwordField,
    })
  }

  handlePasswordSetValid = passwordValidity => {
    this.setState({
      isPasswordValid: passwordValidity,
    })
  }

  handleCompleted = data => {
    const { token } = data.Login
    localStorage.setItem(AUTH_TOKEN, token)
    navigate("/UserListPage")
  }
}
