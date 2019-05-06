import * as React from 'react';
import * as ReactDom from 'react-dom';
import TextField from 'material-ui/TextField';


class Validator{
    public isEmail(text:string): Boolean{
        const regex = /\w+@\w+.com$/gm;
        return regex.test(text);
    }
    public isPassword(text:string): Boolean{
        const regex = /^(?=.*\d)(?=.*[a-zA-Z]).{7,}$/gm;
        return regex.test(text);
    }
}

export class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          email: null,
          password: null,
          isEmailValid: false,
          isPasswordValid: false,
          submitted: false,
        };
      }   

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let validation = new Validator();
        switch (name) {
          case 'email': 
          this.setState({
            isEmailValid: validation.isEmail(value),
            }) ;
            break;
          case 'password': 
          this.setState({
            isPasswordValid: validation.isPassword(value),
            }) ;
            break;
          default:
            break;
        }
      }

      handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submitted: true,
        }) ;
        console.log(this.state);
      }

      
    render(){
        const {isEmailValid,isPasswordValid,submitted} = this.state;
        return(
            <form method = "post" onSubmit = {this.handleSubmit} noValidate className = "Login">
              <h1 className = "LoginTitle">Bem vindo à TaqTile</h1>
              <input type = "text" className = "FormInput" name = "email" placeholder = "Login" onChange = {this.handleChange} required />
              {(submitted && !isEmailValid) && <span className = 'Error'>Email Inválido</span>}
              <input type = "password" className = "FormInput" name = "password" placeholder = "Senha" onChange = {this.handleChange} required />
              {(submitted && !isPasswordValid) && <span className = 'Error'>Deve conter pelo menos 7 caracteres, com 1 alfanumérico e 1 dígito</span>}
              <button type = "submit" className = "LoginButton">Fazer Login</button>
              </form>
        );
    };
};