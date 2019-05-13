import styled,{css} from 'styled-components'

export const LoadingMessage = styled.p`
  display:none;
  text-align: center;
  font-size: 12px;
  color: grey;
  margin-top: 8px;
  width: 100%

  ${props =>
    props.loading &&
    css`
      display: block;
    `}
`
