import * as React from "react"

interface UserCardFullInfoProps {
  id: string,
  name: string,
  cpf: string,
  birthDate: string,
  email: string,
  role: string
}

export class UserCardFullInfo extends React.Component<UserCardFullInfoProps, any> {

  render() {
    return (
      <li className="UserCard" id={this.props.id}>
        <p>Id: {this.props.id}</p>
        <p>Nome: {this.props.name}</p>
        <p>Email: {this.props.email}</p>
        <p>CPF: {this.props.cpf}</p>
        <p>Data de Nascimento: {this.props.birthDate}</p>
        <p>Função: {this.props.role}</p>
      </li>
    )
  }
}
