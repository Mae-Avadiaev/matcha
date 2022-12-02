import React from 'react';
import {
    SignUpPageContainer,
    SignUpContainer,
    HalfSignUpContainer,
    SignUpButton,
    Caption,
    OrContainer,
} from "./Registration.styles";

type RegistrationProps = {
}

const Registration = () => {
    return (
        <SignUpPageContainer>
            {/*<img src={} alt="Matcha logo"/>*/}
            <SignUpContainer>
                <HalfSignUpContainer>
                    <h2>Find someone new!</h2>
                    <h3>Meet and chat to people near you</h3>
                    <SignUpButton source="facebook">
                        {/*<img src={} alt="Facebook logo"/>*/}
                        <p>Sign in via Facebook</p>
                    </SignUpButton>
                    <Caption>We never post on your behalf.</Caption>
                    <OrContainer>
                        <p>OR</p>
                    </OrContainer>
                </HalfSignUpContainer>
                <HalfSignUpContainer>
                    <h2>Sign up with email</h2>
                    <input placeholder="Email"/>
                    <input placeholder="Create your password"/>
                    <Caption>Password must be at least 8 characters</Caption>
                    <SignUpButton source="email">
                        <p>Create account</p>
                    </SignUpButton>
                </HalfSignUpContainer>
            </SignUpContainer>
        </SignUpPageContainer>
    );
};

export default Registration;