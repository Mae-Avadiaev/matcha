import styled from "styled-components";

export const SignUpPageContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #6740F5;
`

export const SignUpContainer = styled.div`
  display: flex;
  height: 70%;
  width: 65%;
`

interface HalfSignUpContainerProps {
    source: string
}

export const HalfSignUpContainer = styled.div<HalfSignUpContainerProps>`
  background: ${p => p.source === "facebook" ? "#ECE9F7" : "#DED7F4"};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: ${p => p.source === "facebook" ? "12px 0 0 12px" : "0 12px 12px 0"};


  h2 {
    
  }
    
  h3 {
      
  }
  
  
`

interface SignUpButtonProps {
    source: string
}

export const SignUpButton = styled.div<SignUpButtonProps>`
  background: ${p => p.source === "facebook" ? "#336AD3" : "#5D3ADD"};
  border-radius: 5px;
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.source === "facebook" ? "#ECE9F7" : "#DED7F4"};
  
  img {
    width: 1em;
    
  }
`

export const Caption = styled.p`
    
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