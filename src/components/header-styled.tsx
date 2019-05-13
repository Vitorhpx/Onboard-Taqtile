import styled from "styled-components"
import Header from "./header";
import { Color } from "../constants";

export const StyledHeader = styled(Header)`
  @import url("https://fonts.googleapis.com/css?family=Roboto+Mono|Ubuntu");
  padding-bottom:2em;
  h1 {
    font-size: 32px;
    color: ${Color.Primary};
    padding-left: 10px;
    padding-bottom: 30px;
    font-family: "Ubuntu", sans-serif;
    text-align: left;
    display:inline;
  }
  img {
    position: relative;
    display:inline;
    top:10px;
    height:3em;
  }
`