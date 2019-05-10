import * as React from 'react';
import { Validator } from '../utils/validator';
import { ErrorMessage } from './error-message';
import { StyledInput } from './input-styled';

interface FieldProps {
    canShowError: boolean
    setField: Function
    setValid: Function
    validation: Function
    errorMessage: string
    name: string
    placeholder: string
    type: string
}

interface FieldState {
  field: string;
  isFieldValid: boolean;
}

export class Field extends React.Component<FieldProps, FieldState> {
    constructor(props) {
        super(props);
        this.state = {
          field: null,
          isFieldValid: false,
        };
      }

      handleFieldChange = (event) => {
        event.preventDefault();
        const { value } = event.target;
        const isValid = this.props.validation(value);
        this.setState({
          isFieldValid: isValid,
          }) ;
        this.props.setField(value);
        this.props.setValid(isValid);
      }

    render(){
        const {isFieldValid} = this.state;
        return(
            <>
              <StyledInput type = {this.props.type} error = {(this.props.canShowError && !isFieldValid)} name = {this.props.name} placeholder = {this.props.placeholder} onChange = {this.handleFieldChange} required />
              <ErrorMessage error = {(this.props.canShowError && !isFieldValid)}>{this.props.errorMessage}</ErrorMessage>
            </>
        );
    };
};
