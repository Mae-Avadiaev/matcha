import styled from "styled-components";
import {ButtonContainer, ButtonBackground} from "../button/button.styles";

export const SignUpPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #6740F5;
`

export const SignUpContainer = styled.main`
  display: flex;
  height: 70%;
  width: 65%;
  z-index: 5;
  margin-top: -9vh;
`

const HalfSignUpContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;


  h2 {
    font-weight: 600;
    font-size: 1.625rem;
    line-height: 2rem;
    color: #2d2d2d;
  }
    
  h3 {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: #2d2d2d;
    margin: 0 0 35px 0;
  }
`

export const Caption = styled.p`
  font-size: 0.75rem;
  color: #2d2d2d;
`

export const CaptionWrapper = styled.div`
  width: 55%;
`

export const FacebookSignUpContainer = styled(HalfSignUpContainer)`
  background-color: #ECE9F7;
  border-radius: 12px 0 0 12px;
  
  h2 {
    margin: 0 0 0.7rem 0;
  }
  
  ${Caption} {
    margin: 1.25rem 0 0 0;
  }

  ${ButtonContainer} {
    color: white;
    width: 55%;
  }
  
  ${ButtonBackground} {
    background-color: #336AD3;
  }
`

export const EmailSignUpContainer = styled(HalfSignUpContainer)`
  background-color: #DED7F4;
  border-radius: 0 12px 12px 0;

  h2 {
    margin: 0 0 25px 0;
  }
  
  ${Caption} {
    margin: 0.35rem 0 1.25rem 0;
  }
  
  ${ButtonContainer} {
    color: white;
    width: 55%;
  }
  
  ${ButtonBackground} {
    background-color: #5D3ADD;
  }
`

export const OrContainer = styled.div`
  position: absolute;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  right: -23px;
  background: #ECE9F7;
  z-index: 1;
`

export const Decoration = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0;
  right: 0;
  height: 360px;
`