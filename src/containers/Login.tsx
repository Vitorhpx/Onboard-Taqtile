import * as React from 'react';
import TextField from 'material-ui/TextField';
import { Validator } from '../utils/validator';
import { EmailField } from '../components/email-field';
import { PasswordField } from '../components/password-field';

interface LoginProps {
}

interface LoginState {
  submitted: boolean;
  email: string;
  password: string;
}

export class Login extends React.Component<LoginProps, LoginState> {
    constructor(props) {
        super(props);
        this.state = {
          submitted: false,
          email: "",
          password:""
        };
      }

      handleSubmit = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            submitted: true,
        }) ;
        console.log(this.state);
      }

      handleEmailChange = (emailField) => {
        this.setState({
          email: emailField,
        }) ;
      }

      handlePasswordChange = (passwordField) => {
        this.setState({
          password: passwordField,
        }) ;
      }

    render(){
        const {submitted} = this.state;
        return(
            <form method = "post" onSubmit = {this.handleSubmit} noValidate className = "Login">
              <h1 className = "LoginTitle">Bem vindo à TaqTile</h1>
              <EmailField canShowError={submitted} setEmail={this.handleEmailChange}/>
              <PasswordField canShowError={submitted} setPassword={this.handlePasswordChange}/>
              <button type = "submit" className = "LoginButton">Fazer Login</button>
            </form>
        );
    };
};

