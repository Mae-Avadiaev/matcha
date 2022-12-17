import styled from "styled-components";
import {ButtonContainer, ButtonBackground} from "../button/button.styles";
import {Caption} from "../welcome/welcome.styles";
import {Input} from "../input/input.styles";

export const SignInPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh
`

export const SignInContainer = styled.div`
  margin-top: -20vh;

  ${ButtonContainer} {
    color: white;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  ${ButtonBackground} {
    background-color: #5D3ADD;
  }

  ${Caption} {
    color: #2d2d2d;
    margin-bottom: 5px;
    margin-top: 0;
  }

  h2 {
    margin-bottom: 10px;
  }

  ${Input} {
    margin-bottom: 17px;
    
    ::placeholder {
      opacity: 0.4;
    }
  }
`

export const SectionInscription = styled.p`
  color: #767676;
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 20px;
`

export const StyledLink = styled.p`
  color: #6740F5;
  //text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  padding-bottom: 2px;
  font-size: 0.875rem;
  font-weight: 600;
  border-bottom: 1px solid #c9bffd;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid #6740F5;
  }

`