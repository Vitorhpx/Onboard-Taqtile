import * as React from 'react';
import * as ReactDom from 'react-dom'
import TextField from 'material-ui/TextField';


class LoginButton extends React.Component{
    render(){
        return(
            <button type = {this.props.type} className = {"LoginButton"}>{this.props.text}</button>
        );
    }
}

class Form extends React.Component{
    render(){
        return(
            <input type={this.props.type} className = {"Form"} placeholder={this.props.placeholder} />
        );
    }
}
export class Login extends React.Component{

    render(){
        return(
            <div class ="Login">
            <h1>Bem Vindo a TaqTile</h1>
            <form method="post">
              <Form type="text" placeholder="Login"/>
              <Form type="password" name="p" placeholder="Password"/>
              <LoginButton type = {"submit"} text = {"Login"}/>
              </form>
          </div>
        );
    }
}