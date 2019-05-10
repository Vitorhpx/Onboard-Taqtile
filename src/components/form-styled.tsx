import styled, {css} from 'styled-components'

export const StyledForm = styled.form`
  font-size: 12px;
  font-weight:bold;
  color: grey;
  margin-bottom:12px;
  padding: 0.25em 1em;
  ${props =>
    props.error &&
    css`
    `};
`
