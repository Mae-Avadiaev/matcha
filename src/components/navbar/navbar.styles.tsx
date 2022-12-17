import styled from "styled-components";
import {ButtonBackground, ButtonContainer} from "../button/button.styles";
import {SectionInscription} from "../signIn/signIn.styles";

export const StyledNavbar = styled.header<{location: string}>`
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
    color: ${(p) => p.location === '/sign-up' ? "white" : "#6740F5"};
    width: fit-content;
    height: 34px;
    margin-right: 0;
  }
  
  ${ButtonBackground} {
    background-color: ${(p) => p.location === '/sign-up' ? "#6740F5" : "white"};
    height: 34px;
    border: ${(p) => p.location === '/sign-up' ? "white solid 1px" : ""};
  }
  
  ${SectionInscription} {
    color: white;
    margin: 0 10px 0 auto;
  }
`



export const Logo = styled.img<{isStartingPage: boolean}>`
  position: absolute;
  height: ${(p) => p.isStartingPage ? "45px" : "30px"};
  top: ${(p) => p.isStartingPage ? "calc((4vh) / 2 )" : "10px"};
  cursor: ${(p) => p.isStartingPage ? "inherit" : "pointer"};
`