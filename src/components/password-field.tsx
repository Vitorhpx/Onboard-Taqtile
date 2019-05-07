import * as React from 'react';
import { Validator } from '../utils/validator';

interface LoginProps {
    canShowError: boolean
    setPassword: Function
}

interface LoginState {
  Password: string;
  isPasswordValid: boolean;
}

export class PasswordField extends React.Component<LoginProps, LoginState> {
    constructor(props) {
        super(props);
        this.state = {
          Password: null,
          isPasswordValid: false,
        };
      }

      handlePasswordChange = (event) => {
        event.preventDefault();
        const { value } = event.target;
        this.setState({
          isPasswordValid: Validator.isPassword(value),
          }) ;
          this.props.setPassword(value);
      }

    render(){
        const {isPasswordValid} = this.state;
        return(
            <>
              <input type = "password" className = "FormInput" name = "password" placeholder = "Senha" onChange = {this.handlePasswordChange} required />
              {(this.props.canShowError && !isPasswordValid) && <span className = 'Error'>Deve conter pelo menos 7 caracteres, com 1 alfanumérico e 1 dígito</span>}
            </>
        );
    };
};
