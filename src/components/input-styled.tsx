import styled,{css} from 'styled-components'
import { Color } from '../constants';

export const StyledInput = styled.input`
  text-align: center;
  width: 80%;
  height: 1.5 rem;
  border-radius: 10px;
  padding: 0.5rem;
  border: 1px solid gray;
  margin-bottom: 1em;
  ${props =>
    props.error &&
    css`
    background-color: ${Color.Error};
    `};
`
