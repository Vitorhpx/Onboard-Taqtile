import * as React from 'react';
import TextField from 'material-ui/TextField';
import { Validator } from '../utils/validator';
import { EmailField } from '../components/email-field';
import { PasswordField } from '../components/password-field';

interface LoginProps {
}

interface LoginState {
  submitted: boolean;
}

export class Login extends React.Component<LoginProps, LoginState> {
    constructor(props) {
        super(props);
        this.state = {
          submitted: false,
        };
      }   

      handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submitted: true,
        }) ;
        console.log(this.state);
      }
      
    render(){
        const {submitted} = this.state;
        return(
            <form method = "post" onSubmit = {this.handleSubmit} noValidate className = "Login">
              <h1 className = "LoginTitle">Bem vindo à TaqTile</h1>
              <EmailField canShowError={submitted}/>
              <PasswordField canShowError={submitted}/>
              <button type = "submit" className = "LoginButton">Fazer Login</button>
            </form>
        );
    };
};

