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
import { ErrorMessage } from "../components/error-message"
import { LoadingMessage } from "../components/loading-message"

interface LoginFormState {
  submitted: boolean
  email: string
  password: string
  isEmailValid: boolean
  isPasswordValid: boolean
  errorMessage: string
}

interface LoginFormProps {
  mutation: Function,
  result: any,
}

export default class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
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
      <StyledForm
        method="post"
        onSubmit={event => {
          this.handleSubmit(this.props.mutation, event)
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
          canShowError={this.state.submitted && !this.state.isPasswordValid}
          onValueChange={this.handlePasswordChange}
          onValidChange={this.handlePasswordSetValid}
          name="password"
          placeholder="*******"
          text="Senha"
          validation={Validator.isPassword}
          errorMessage="Deve conter pelo menos 7 caracteres, com 1 alfanumérico e 1 dígito"
          type="password"
        />
        <Button type="submit" className="LoginButton" disabled={this.props.result.loading}>
          Fazer Login
        </Button>
        {this.props.result.error && (
          <ErrorMessage error>{this.props.result.error.message}</ErrorMessage>
        )}
        {this.props.result.loading && <LoadingMessage loading>Loading...</LoadingMessage>}
      </StyledForm>
    )
  }
  handleSubmit = async (mutateFunction: Function, event) => {
    event.preventDefault()
    this.setState({
      submitted: true,
    })
    console.log(this.state)
    if (this.state.isEmailValid && this.state.isPasswordValid) {
      await mutateFunction({variables:{email: this.state.email, password: this.state.password }});
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
}
