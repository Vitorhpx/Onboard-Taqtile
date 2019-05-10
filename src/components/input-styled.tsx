import styled,{css} from 'styled-components'

export const StyledInput = styled.input`
  text-align: center;
  width: 80%;
  height: 1.5 rem;
  border-radius: 3px;
  padding: 0.5rem;
  border: 1px solid gray;
  ${props =>
    props.error &&
    css`
    background-color: #ffb7b7;
    `};
`
