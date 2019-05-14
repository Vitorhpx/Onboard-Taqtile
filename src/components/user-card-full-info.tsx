import * as React from "react"
import { StyledP } from "./p-styled";

interface UserCardFullInfoProps {
  id: string,
  name: string,
  cpf: string,
  birthDate: string,
  email: string,
  role: string,
  className: string,
}

export class UserCardFullInfo extends React.Component<UserCardFullInfoProps, any> {

  render() {
    return (
      <div className={this.props.className} id={this.props.id}>
        <StyledP><b>Id:</b> {this.props.id}</StyledP>
        <StyledP><b>Nome:</b> {this.props.name}</StyledP>
        <StyledP><b>Email:</b> {this.props.email}</StyledP>
        <StyledP><b>CPF:</b> {this.props.cpf}</StyledP>
        <StyledP><b>Data de Nascimento: </b>{this.props.birthDate}</StyledP>
        <StyledP><b>Função: </b>{this.props.role}</StyledP>
      </div>
    )
  }
}
