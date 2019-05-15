import styled from "styled-components"
import { UserCard } from "./user-card"
import { Color, Constrains } from "../constants"

export const StyledUserCard = styled.div`
  background-color: ${Color.White};
  border: ${Color.Black};
  max-width: ${Constrains.UserCardWidth};
  border: 2px solid ${Color.GrayDark};
  border-radius: ${Constrains.BorderRadius};
  padding: 0.5em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 0.5em;
`
