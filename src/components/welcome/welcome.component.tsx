import React from 'react';
import facebookIcon from "../../assets/facebook-icon.svg"
import {
    SignUpPageContainer,
    SignUpContainer,
    FacebookSignUpContainer,
    EmailSignUpContainer,
    Caption,
    CaptionWrapper,
    OrContainer,
    Decoration
} from "./welcome.styles";
import {Input} from "../input/input.styles";
import Button from "../button/button.component";
import decoration from "../../assets/decoration.png"

function Welcome() {
    return (
        <SignUpPageContainer>
            <SignUpContainer>
                <FacebookSignUpContainer>
                    <h2>Find someone new!</h2>
                    <h3>Meet and chat to people near you</h3>
                    <Button caption="Sign in via Facebook" icon={facebookIcon} onClick={() => {}}/>
                    <Caption>We never post on your behalf.</Caption>
                    <OrContainer>
                        <p>OR</p>
                    </OrContainer>
                </FacebookSignUpContainer>
                <EmailSignUpContainer>
                    <h2>Sign up with email</h2>
                    <Input placeholder="Email" width="55%"/>
                    <br/>
                    <Input placeholder="Create your password" width="55%"/>
                    <CaptionWrapper>
                        <Caption>Password must be at least 8 characters</Caption>
                    </CaptionWrapper>
                    <Button caption="Create account" onClick={() => {}}/>
                </EmailSignUpContainer>
            </SignUpContainer>
            <Decoration src={decoration} alt='Decoration image'/>
        </SignUpPageContainer>
    );
};

export default Welcome;