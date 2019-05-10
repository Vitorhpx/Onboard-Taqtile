import styled,{css} from 'styled-components'

export const ErrorMessage = styled.p`
  display:none;
  text-align: center;
  font-size: 12px;
  color: red;

  ${props =>
    props.error &&
    css`
      display: block;
    `}
`
