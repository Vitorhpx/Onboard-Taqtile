import styled,{css} from 'styled-components'
import { Color } from '../constants';

export const LoadingMessage = styled.p`
  display:none;
  text-align: center;
  font-size: 12px;
  color: ${Color.Gray};
  margin-top: 8px;
  width: 100%

  ${props =>
    props.loading &&
    css`
      display: block;
    `}
`
