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

class LoginTitle extends React.Component{
    render(){
        return(
            <h1 className = {"LoginTitle"}>{this.props.text}</h1>
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
            
            <form method="post">
              <LoginTitle text = "Bem vindo à TaqTile"/>
              <Form type="text" placeholder="Login"/>
              <Form type="password" name="p" placeholder="Password"/>
              <LoginButton type = {"submit"} text = {"Login"}/>
              </form>
          </div>
        );
    }
}