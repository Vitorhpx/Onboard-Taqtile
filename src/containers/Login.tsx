import * as React from 'react';
import TextField from 'material-ui/TextField';
import { Validator } from '../utils/validator';
import { EmailField } from '../components/email-field';
import { PasswordField } from '../components/password-field';
import {gql} from "apollo-boost";
import { Mutation } from "react-apollo";

interface LoginProps {
}

interface LoginState {
  submitted: boolean;
  email: string;
  password: string;
  isEmailValid: boolean;
  isPasswordValid: boolean;
  errorMessage: string;
}

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    Login(data: {email: $email, password: $password, rememberMe: true}) {
      token
    }
  }
`

export class Login extends React.Component<LoginProps, LoginState> {
    constructor(props) {
        super(props);
        this.state = {
          submitted: false,
          email: "",
          password:"",
          isEmailValid: false,
          isPasswordValid: false,
          errorMessage: ""
        };
      }

      handleSubmit = async (mutateFunction : Function, event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            submitted: true,
        }) ;
        console.log(this.state);
        if(this.state.isEmailValid /*&& this.state.isPasswordValid*/){
          await mutateFunction();
        }
      }

      handleSetEmail = (emailField) => {
        this.setState({
          email: emailField,
        }) ;
      }

      handleEmailSetValid = (emailValidity) => {
        this.setState({
          isEmailValid: emailValidity,
        }) ;
      }

      handlePasswordChange = (passwordField) => {
        this.setState({
          password: passwordField,
        }) ;
      }

      handlePasswordSetValid = (passwordValidity) => {
        this.setState({
          isPasswordValid: passwordValidity,
        }) ;
      }

      _confirm = async data => {
        const {token} = data.Login;
        localStorage.setItem('token', token);
      }

    render(){
        const {submitted} = this.state;
        return(
          <Mutation
              mutation = {LOGIN_MUTATION}
              variables = {{"email":this.state.email,"password":this.state.password}}
              onCompleted={errors => this._confirm(errors)}>
              {
                (mutation, { loading, error }) => (
            <form method = "post" onSubmit = {(event) => {this.handleSubmit(mutation, event)}} noValidate className = "Login">
              <h1 className = "LoginTitle">Bem vindo à TaqTile</h1>
              <EmailField canShowError={submitted} setEmail={this.handleSetEmail} setValid = {this.handleEmailSetValid}/>
              <PasswordField canShowError={submitted} setPassword={this.handlePasswordChange} setValid = {this.handlePasswordSetValid}/>
              <button type = "submit" className = "LoginButton">Fazer Login</button>
              {loading && <p>Loading...</p>}
              {error && <p>Erro!</p>}
            </form>
                )}
          </Mutation>
        );
    }
;
};

