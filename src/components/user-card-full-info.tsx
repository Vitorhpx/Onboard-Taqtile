import * as React from "react"
import { P } from "./p-styled";
import { StyledUserCardFullInfo } from "./user-card-full-info-styled";

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
<<<<<<< HEAD
      <div className={this.props.className} id={this.props.id}>
        <StyledP><b>Id:</b> {this.props.id}</StyledP>
        <StyledP><b>Nome:</b> {this.props.name}</StyledP>
        <StyledP><b>Email:</b> {this.props.email}</StyledP>
        <StyledP><b>CPF:</b> {this.props.cpf}</StyledP>
        <StyledP><b>Data de Nascimento: </b>{this.props.birthDate}</StyledP>
        <StyledP><b>Função: </b>{this.props.role}</StyledP>
      </div>
=======
      <StyledUserCardFullInfo id={this.props.id}>
        <P><b>Id:</b> {this.props.id}</P>
        <P><b>Nome:</b> {this.props.name}</P>
        <P><b>Email:</b> {this.props.email}</P>
        <P><b>CPF:</b> {this.props.cpf}</P>
        <P><b>Data de Nascimento: </b>{this.props.birthDate}</P>
        <P><b>Função: </b>{this.props.role}</P>
      </StyledUserCardFullInfo>
>>>>>>> Removed Classnames
    )
  }
}
