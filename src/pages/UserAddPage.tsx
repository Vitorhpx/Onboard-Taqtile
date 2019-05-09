import * as React from "react"
import { EmailField } from "../components/email-field"
import { PasswordField } from "../components/password-field"
import { gql } from "apollo-boost"
import { Mutation, MutationResult } from "react-apollo"
import { AUTH_TOKEN } from "../constants"
import { Layout } from "../layout"
import { navigate } from "gatsby"
import { Field } from "../components/field"
import { Validator } from "../utils/validator"

interface LoginPageState {
  submitted: boolean
  errorMessage: string
  id: string
  name: string
  cpf: string
  birthDate: string
  email: string
  role: string
  isIdValid: boolean
  isNameValid: boolean
  isCpfValid: boolean
  isBirthDateValid: boolean
  isEmailValid: boolean
  isRoleValid: boolean
}

export default class LoginPage extends React.Component<any, LoginPageState> {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false,
      id: "",
      name: "",
      cpf: "",
      birthDate: "",
      email: "",
      role: "",
      isIdValid: false,
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
      <Layout>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
          }}
          noValidate
          className="Form"
        >
          <h1 className="LoginTitle">Adicionar Novo Usuário</h1>
          <Field
            canShowError={this.state.isIdValid}
            setField={this.handleSetId}
            setValid={this.handleIdSetValid}
            name="id"
            placeholder="Id"
            validation={Validator.isId}
            errorMessage="Id inválido"
          />
          <Field
            canShowError={this.state.submitted && !this.state.isCpfValid}
            setField={this.handleSetCpf}
            setValid={this.handleCpfSetValid}
            name="cpf"
            placeholder="CPF"
            validation={Validator.isCpf}
            errorMessage="CPF inválido"
          />
          <Field
            canShowError={this.state.submitted && !this.state.isBirthDateValid}
            setField={this.handleSetBirthDate}
            setValid={this.handleBirthDateSetValid}
            name="birthDate"
            placeholder="Data de Nascimento"
            validation={Validator.isBirthDate}
            errorMessage="Formato AAAA-MM-DD"
          />
          <Field
            canShowError={this.state.submitted && !this.state.isEmailValid}
            setField={this.handleSetEmail}
            setValid={this.handleEmailSetValid}
            name="email"
            placeholder="Email"
            validation={Validator.isEmail}
            errorMessage="Email Inválido"
          />
          <Field
            canShowError={this.state.submitted && !this.state.isRoleValid}
            setField={this.handleSetRole}
            setValid={this.handleRoleSetValid}
            name="role"
            placeholder="Função"
            validation={Validator.isRole}
            errorMessage="Função Inválida, deve ser 'user' ou 'admin'"
          />
          <button type="submit" className="LoginButton">
            Fazer Login
          </button>
        </form>
      </Layout>
    )
  }
  handleSubmit = event => {
    event.preventDefault()
    const { name, value } = event.target
    this.setState({
      submitted: true,
    })
    console.log(this.state)
  }

  handleSetId = idField => {
    this.setState({
      id: idField,
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

  handleIdSetValid = idValidity => {
    this.setState({
      isIdValid: idValidity,
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
}
