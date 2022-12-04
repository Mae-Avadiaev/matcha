import styled from "styled-components";
import {ButtonBackground, ButtonContainer} from "../button/button.styles";

export const StyledNavbar = styled.header`
  box-sizing: border-box;
  background: #6740F5;
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8%;
  position: fixed;
  top: 0;
  
  ${ButtonContainer} {
    color: #6740F5;
    width: fit-content;
    height: 34px;
    margin-left: auto;
    margin-right: 0;
  }
  
  ${ButtonBackground} {
    background-color: white;
    height: 34px;
  }
`