import * as React from "react"
import { P } from "./p-styled"
import { StyledUserCardFullInfo } from "./user-card-full-info-styled"

interface UserCardFullInfoProps {
  id: string
  name: string
  cpf: string
  birthDate: string
  email: string
  role: string
}

export class UserCardFullInfo extends React.Component<
  UserCardFullInfoProps,
  any
> {
  render() {
    return (
      <StyledUserCardFullInfo id={this.props.id}>
        <P>
          <b>Id:</b> {this.props.id}
        </P>
        <P>
          <b>Nome:</b> {this.props.name}
        </P>
        <P>
          <b>Email:</b> {this.props.email}
        </P>
        <P>
          <b>CPF:</b> {this.props.cpf}
        </P>
        <P>
          <b>Data de Nascimento: </b>
          {this.props.birthDate}
        </P>
        <P>
          <b>Função: </b>
          {this.props.role}
        </P>
      </StyledUserCardFullInfo>
    )
  }
}
