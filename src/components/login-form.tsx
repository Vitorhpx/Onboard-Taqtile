import * as React from "react"
import { Validator } from "../utils/validator"
import { Field } from "../components/field"
import { Button } from "../components/styled-button"
import { StyledForm } from "../components/form-styled"
import { ErrorMessage } from "./error-message-styled"
import { LoadingMessage } from "./loading-message-styled"
import { H2 } from "./h2-styled"
import { Color } from "../constants"
import { MutationResult } from "react-apollo"

interface LoginFormState {
  submitted: boolean
  email: string
  password: string
  isEmailValid: boolean
  isPasswordValid: boolean
  errorMessage: string
}

interface LoginFormProps {
  submitCallback: (email: string, password: string) => void
  result: MutationResult
}

export default class LoginForm extends React.Component<
  LoginFormProps,
  LoginFormState
> {
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
    return (
      <StyledForm
        method="post"
        onSubmit={event => {
          this.handleSubmit(event)
        }}
        noValidate
      >
        <H2 color={Color.Black}>Bem vindo à Taqtile</H2>
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
        <Button
          type="submit"
          className="LoginButton"
          disabled={this.props.result.loading}
        >
          Fazer Login
        </Button>
        {this.props.result.error && (
          <ErrorMessage error>{this.props.result.error.message}</ErrorMessage>
        )}
        {this.props.result.loading && (
          <LoadingMessage loading>Loading...</LoadingMessage>
        )}
      </StyledForm>
    )
  }
  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      submitted: true,
    })
    if (this.state.isEmailValid && this.state.isPasswordValid) {
      this.props.submitCallback(this.state.email, this.state.password)
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
