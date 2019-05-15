import * as React from "react"
import { Layout } from "../layout"
import LoginFormContainer from "../containers/login-form-container"
import LoginForm from "../components/login-form"

interface LoginPageState {
  submitted: boolean
  email: string
  password: string
  isEmailValid: boolean
  isPasswordValid: boolean
  errorMessage: string
}

export default class LoginPage extends React.Component<any, LoginPageState> {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false,
      email: "",
      password: "",
      isEmailValid: false,
      isPasswordValid: false,
      errorMessage: "",
    }
  }

  render() {
    const { submitted } = this.state
    return (
      <Layout>
        <LoginFormContainer
          render={(onSubmit, result) => (
            <LoginForm submitCallback={onSubmit} result={result} />
          )}
        />
      </Layout>
    )
  }
}
