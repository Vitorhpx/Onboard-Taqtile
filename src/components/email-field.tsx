import * as React from 'react';
import { Validator } from '../utils/validator';

interface EmailProps {
    canShowError: boolean
    setEmail: Function
    setValid: Function
}

interface EmailState {
  email: string;
  isEmailValid: boolean;
}

export class EmailField extends React.Component<EmailProps, EmailState> {
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
        const isValid = Validator.isEmail(value);
        this.setState({
          isEmailValid: isValid,
          }) ;
        this.props.setEmail(value);
        this.props.setValid(isValid);
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
