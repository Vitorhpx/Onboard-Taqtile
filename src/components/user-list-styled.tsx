import styled from 'styled-components'
import { UserCard } from './user-card';
import { Color, Constrains } from '../constants';

export const StyledUserList = styled.ul`
  margin-left: 1em;
  max-width: ${Constrains.UserCardWidth};
  margin: 0 auto;
  text-align: center;
`
