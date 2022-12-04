import React from 'react';
import facebookIcon from "../../assets/facebook-icon.svg"
import {
    SignUpPageContainer,
    SignUpContainer,
    FacebookSignUpContainer,
    EmailSignUpContainer,
    Caption,
    CaptionWrapper,
    OrContainer
} from "./registration.styles";
import Button from "../button/button.component";
import Navbar from "../navbar/navbar.component";

type RegistrationProps = {
}

function Registration() {
    return (
        <SignUpPageContainer>
            {/*<img src={} alt="Matcha logo"/>*/}
            <Navbar/>
            <SignUpContainer>
                <FacebookSignUpContainer>
                    <h2>Find someone new!</h2>
                    <h3>Meet and chat to people near you</h3>
                    <Button caption="Sign in via Facebook" icon={facebookIcon}/>
                    <Caption>We never post on your behalf.</Caption>
                    <OrContainer>
                        <p>OR</p>
                    </OrContainer>
                </FacebookSignUpContainer>
                <EmailSignUpContainer>
                    <h2>Sign up with email</h2>
                    <input placeholder="Email"/>
                    <br/>
                    <input placeholder="Create your password"/>
                    <CaptionWrapper>
                        <Caption>Password must be at least 8 characters</Caption>
                    </CaptionWrapper>
                    <Button caption="Create account"/>
                </EmailSignUpContainer>
            </SignUpContainer>
        </SignUpPageContainer>
    );
};

export default Registration;