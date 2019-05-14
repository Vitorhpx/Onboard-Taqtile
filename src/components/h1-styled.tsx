import styled from 'styled-components'
import { Color } from '../constants';

export const StyledH1 = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono|Ubuntu');
  background-color: ${Color.White};
  display:inline;
  font-size: 32px;
  height: 44px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  font-family: 'Ubuntu', sans-serif;
  text-align:left;
  margin-bottom: 1em;
  color: ${props => props.color};
`
