import styled, {css} from 'styled-components'

export const Form = styled.form`
  font-size: 12px;
  font-weight:bold;
  color: grey;
  margin-bottom:12px;
  padding: 0.25em 1em;
  input {
  border: 1px;
  }
  .labelTop {
    text-align: center;
    width: 100%;
    font-size: 12px;
    color: gray;
  }
  ${props =>
    props.error &&
    css`
    `};
`
