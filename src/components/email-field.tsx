import * as React from 'react';
import { Validator } from '../utils/validator';

interface LoginProps {
    canShowError: boolean
    setEmail: Function
}

interface LoginState {
  email: string;
  isEmailValid: boolean;
}

export class EmailField extends React.Component<LoginProps, LoginState> {
    constructor(props) {
        super(props);
        this.state = {
          email: null,
          isEmailValid: false,
        };
      }

      handleEmailChange = (event) => {
        event.preventDefault();
        const { value } = event.target;
        this.setState({
          isEmailValid: Validator.isEmail(value),
          }) ;
        this.props.setEmail(value);
      }

    render(){
        const {isEmailValid} = this.state;
        return(
            <>
              <input type = "text" className = "FormInput" name = "email" placeholder = "Login" onChange = {this.handleEmailChange} required />
              {(this.props.canShowError && !isEmailValid) && <span className = 'Error'>Email Inválido</span>}
            </>
        );
    };
};
