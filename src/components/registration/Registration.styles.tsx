import styled from "styled-components";

export const SignUpPageContainer = styled.div`
    display: flex;
`

export const SignUpContainer = styled.div`
    
`

export const HalfSignUpContainer = styled.div`
    h2 {
    
    }
    
    h3 {
      
    }
`

interface SignUpButtonProps {
    source: string
}

export const SignUpButton = styled.div<SignUpButtonProps>`
    color: ${p => p.source === "facebook" ? "red" : "green"}
`

export const Caption = styled.p`
    
`

export const OrContainer = styled.div`
    
`