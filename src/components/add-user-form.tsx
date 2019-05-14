import * as React from "react"
import { navigate } from "gatsby"
import { Field } from "../components/field"
import { Validator } from "../utils/validator"
import { Button } from "../components/styled-button"
import { ErrorMessage } from "./error-message-styled"
import { StyledForm } from "../components/form-styled"
import { H1 } from "./h1-styled";
import { H2 } from "./h2-styled";
import { Color } from "../constants";


interface AddUserFormState {
  submitted: boolean
  errorMessage: string
  password: string
  name: string
  cpf: string
  birthDate: string
  email: string
  role: string
  isPasswordValid: boolean
  isNameValid: boolean
  isCpfValid: boolean
  isBirthDateValid: boolean
  isEmailValid: boolean
  isRoleValid: boolean
}

interface AddUserFormProps{
  mutation: Function,
  result: any,
}

export default class AddUserForm extends React.Component<
  AddUserFormProps,
  AddUserFormState
> {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false,
      password: "",
      name: "",
      cpf: "",
      birthDate: "",
      email: "",
      role: "",
      isPasswordValid: false,
      isNameValid: false,
      isCpfValid: false,
      isBirthDateValid: false,
      isEmailValid: false,
      isRoleValid: false,
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
        <H2 color = {Color.Black}>Adicionar Novo Usuário</H2>
        <Field
          canShowError={this.state.submitted}
          onValueChange={this.handleSetName}
          onValidChange={this.handleNameSetValid}
          name="name"
          placeholder="Joao Silva"
          text="Nome"
          validation={Validator.isName}
          errorMessage="Nome deve estar no formato: Joao Silva"
          type="text"
        />
        <Field
          canShowError={this.state.submitted}
          onValueChange={this.handleSetCpf}
          onValidChange={this.handleCpfSetValid}
          name="cpf"
          placeholder="12345678910"
          text="CPF"
          validation={Validator.isCpf}
          errorMessage="CPF inválido"
          type="text"
        />
        <Field
          canShowError={this.state.submitted}
          onValueChange={this.handleSetBirthDate}
          onValidChange={this.handleBirthDateSetValid}
          name="birthDate"
          text="Data de Nascimento"
          placeholder="2000-12-30"
          validation={Validator.isBirthDate}
          errorMessage="Formato AAAA-MM-DD"
          type="text"
        />
        <Field
          canShowError={this.state.submitted}
          onValueChange={this.handleSetEmail}
          onValidChange={this.handleEmailSetValid}
          name="email"
          text="Email"
          placeholder="example@email.com"
          validation={Validator.isEmail}
          errorMessage="Email Inválido"
          type="text"
        />
        <Field
          canShowError={this.state.submitted}
          onValueChange={this.handleSetPassword}
          onValidChange={this.handlePasswordSetValid}
          name="password"
          text="Senha"
          placeholder="*******"
          validation={Validator.isPassword}
          errorMessage="Deve conter pelo menos 7 caracteres, com 1 alfanumérico e 1 dígito"
          type="password"
        />
        <Field
          canShowError={this.state.submitted}
          onValueChange={this.handleSetRole}
          onValidChange={this.handleRoleSetValid}
          name="role"
          text="Função"
          placeholder="user"
          validation={Validator.isRole}
          errorMessage="Função Inválida, deve ser 'user' ou 'admin"
          type="text"
        />
        <Button type="submit">Criar Usuário</Button>
        {this.props.result.error && (
          <ErrorMessage error>{this.props.result.error.message}</ErrorMessage>
        )}
      </StyledForm>
    )
  }
  handleSubmit = async (mutateFunction: Function, event) => {
    event.preventDefault()
    this.setState({
      submitted: true,
    })
    const isFormValid =
      this.state.isEmailValid &&
      this.state.isPasswordValid &&
      this.state.isBirthDateValid &&
      this.state.isCpfValid &&
      this.state.isRoleValid &&
      this.state.isNameValid
    if (isFormValid) {
      await mutateFunction({variables:{
        data: {
          name: this.state.name,
          email: this.state.email,
          cpf: this.state.cpf,
          birthDate: this.state.birthDate,
          password: this.state.password,
          role: this.state.role,
        },
      }});
    }
  }

  handleSetPassword = passwordField => {
    this.setState({
      password: passwordField,
    })
  }

  handleSetName = nameField => {
    this.setState({
      name: nameField,
    })
  }

  handleSetCpf = cpfField => {
    this.setState({
      cpf: cpfField,
    })
  }

  handleSetBirthDate = birthDateField => {
    this.setState({
      birthDate: birthDateField,
    })
  }

  handleSetEmail = emailField => {
    this.setState({
      email: emailField,
    })
  }

  handleSetRole = roleField => {
    this.setState({
      role: roleField,
    })
  }

  handlePasswordSetValid = passwordValidity => {
    this.setState({
      isPasswordValid: passwordValidity,
    })
  }

  handleNameSetValid = nameValidity => {
    this.setState({
      isNameValid: nameValidity,
    })
  }

  handleCpfSetValid = cpfValidity => {
    this.setState({
      isCpfValid: cpfValidity,
    })
  }

  handleBirthDateSetValid = birthDateValidity => {
    this.setState({
      isBirthDateValid: birthDateValidity,
    })
  }

  handleEmailSetValid = emailValidity => {
    this.setState({
      isEmailValid: emailValidity,
    })
  }

  handleRoleSetValid = roleValidity => {
    this.setState({
      isRoleValid: roleValidity,
    })
  }

  handleCompleted = () => {
    navigate("/UserListPage")
  }
}
