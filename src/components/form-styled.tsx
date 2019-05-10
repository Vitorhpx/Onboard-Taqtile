import styled, {css} from 'styled-components'

export const StyledForm = styled.form`
  float: center;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  text-align: center;
  width: 30%;
  padding: 2rem;
  line-height: 3rem;
  font-family: "Dosis";



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
