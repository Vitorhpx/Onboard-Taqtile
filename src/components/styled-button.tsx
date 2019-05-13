import styled from 'styled-components'
import {Color} from '../constants'

export const Button = styled.button`
  background-color: ${Color.Primary};
  font-size: 16px;
  color: white;
  border-radius: 8px;
  border: 2px solid;
  height: 44px;
  padding: 0.25em 1em;
  margin-top: 20px;
  margin-left:10px;
  font-family: 'Ubuntu', sans-serif;

  :disabled{
    background-color: ${Color.GrayLight};
  }
`
