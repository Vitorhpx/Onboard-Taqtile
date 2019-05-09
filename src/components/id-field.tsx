import * as React from 'react';
import { Validator } from '../utils/validator';

interface IdProps {
    canShowError: boolean
    setId: Function
    setValid: Function
}

interface IdState {
  id: string;
  isIdValid: boolean;
}

export class IdField extends React.Component<IdProps, IdState> {
    constructor(props) {
        super(props);
        this.state = {
          id: null,
          isIdValid: false,
        };
      }

      handleIdChange = (event) => {
        event.preventDefault();
        const { value } = event.target;
        const isValid = Validator.isId(value);
        this.setState({
          isIdValid: isValid,
          }) ;
        this.props.setId(value);
        this.props.setValid(isValid);
      }

    render(){
        const {isIdValid} = this.state;
        return(
            <>
              <input type = "text" className = "FormInput" name = "id" placeholder = "Login" onChange = {this.handleIdChange} required />
              {(this.props.canShowError && !isIdValid) && <span className = 'Error'>Id Inválido</span>}
            </>
        );
    };
};
