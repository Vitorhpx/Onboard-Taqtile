import * as React from "react"
import { gql } from "apollo-boost"
import { Mutation, MutationResult } from "react-apollo"
import { AUTH_TOKEN } from "../constants"
import { Layout } from "../layout"
import { navigate } from "gatsby"
import { Field } from "../components/field"
import { Validator } from "../utils/validator"

const CREATEUSER = gql`
  mutation createUser($data: UserInput!) {
    UserCreate(data: $data) {
      name
      email
    }
  }
`

interface UserAddPageState {
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

export default class UserAddPage extends React.Component<
  any,
  UserAddPageState
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
      <Layout>
        <Mutation
          mutation={CREATEUSER}
          variables={{
            data: {
              name: this.state.name,
              email: this.state.email,
              cpf: this.state.cpf,
              birthDate: this.state.birthDate,
              password: this.state.password,
              role: this.state.role,
            },
          }}
          onCompleted={() => this.handleCompleted()}
        >
          {(mutation, result: MutationResult) => (
            <form
              method="post"
              onSubmit={event => {
                this.handleSubmit(mutation, event)
              }}
              noValidate
              className="Form"
            >
              <h1 className="LoginTitle">Adicionar Novo Usuário</h1>
              <Field
                canShowError={this.state.submitted}
                onValueChange={this.handleSetName}
                onValidChange={this.handleNameSetValid}
                name="name"
                placeholder="Nome"
                validation={Validator.isName}
                errorMessage="Nome deve estar no formato: Joao Silva"
                type="text"
              />
              <Field
                canShowError={this.state.submitted}
                onValueChange={this.handleSetCpf}
                onValidChange={this.handleCpfSetValid}
                name="cpf"
                placeholder="CPF"
                validation={Validator.isCpf}
                errorMessage="CPF inválido"
                type="text"
              />
              <Field
                canShowError={
                  this.state.submitted
                }
                onValueChange={this.handleSetBirthDate}
                onValidChange={this.handleBirthDateSetValid}
                name="birthDate"
                placeholder="Data de Nascimento"
                validation={Validator.isBirthDate}
                errorMessage="Formato AAAA-MM-DD"
                type="text"
              />
              <Field
                canShowError={this.state.submitted}
                onValueChange={this.handleSetEmail}
                onValidChange={this.handleEmailSetValid}
                name="email"
                placeholder="Email"
                validation={Validator.isEmail}
                errorMessage="Email Inválido"
                type="text"
              />
              <Field
                canShowError={this.state.submitted}
                onValueChange={this.handleSetPassword}
                onValidChange={this.handlePasswordSetValid}
                name="password"
                placeholder="Senha"
                validation={Validator.isPassword}
                errorMessage="Deve conter pelo menos 7 caracteres, com 1 alfanumérico e 1 dígito"
                type="password"
              />
              <Field
                canShowError={this.state.submitted}
                onValueChange={this.handleSetRole}
                onValidChange={this.handleRoleSetValid}
                name="role"
                placeholder="Função"
                validation={Validator.isRole}
                errorMessage="Função Inválida, deve ser 'user' ou 'admin"
                type="text"
              />
              <button type="submit" className="LoginButton">
                Criar Usuário
              </button>
              {result.error && <p className="Error">{result.error.message}</p>}
            </form>
          )}
        </Mutation>
      </Layout>
    )
  }
  handleSubmit = async (mutateFunction: Function, event) => {
    event.preventDefault();
    this.setState({
      submitted: true,
    })
    const isFormValid = this.state.isEmailValid && this.state.isPasswordValid && this.state.isBirthDateValid && this.state.isCpfValid && this.state.isRoleValid && this.state.isNameValid
    if (isFormValid) {
      await mutateFunction()
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
