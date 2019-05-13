import styled from 'styled-components'
import { UserCard } from './user-card';
import { Color } from '../constants';

export const StyledUserCard = styled(UserCard)`
  margin-bottom:1em;

  li{
    background-color:${Color.White};
  }
  h4{
    color:${Color.Black};
    margin:0;
  }
  p{
    color:${Color.GrayDark};
    margin:0;
  }
`
