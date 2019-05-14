import styled from 'styled-components'
import { Color, Constrains } from '../constants';
import { UserCardFullInfo } from './user-card-full-info';

export const StyledUserCardFullInfo = styled(UserCardFullInfo)`
  background-color:${Color.White};
  border:${Color.Black};
  max-width:${Constrains.UserCardWidth};
  border: 2px solid ${Color.GrayDark};
  border-radius: ${Constrains.BorderRadius};
  padding:0.5em;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  margin: 0 auto;
`
