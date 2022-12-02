import React from 'react';
import {SignUpPageContainer} from "./Registration.styles";

type RegistrationProps = {
}

const Registration = () => {
    return (
        <>
            <SignUpPageContainer>
                {/*<img src={} alt="Matcha logo"/>*/}
                <div className="SignUpContainer">
                    <div className="SignUpWithSocNetworkContainer">
                        <h2>Find someone new!</h2>
                        <h3>Meet and chat to people near you</h3>
                        <div className="FacebookSignUpButton">
                            {/*<img src={} alt="Facebook logo"/>*/}
                            <p>Sign in via Facebook</p>
                        </div>
                        <p className="Caption">We never post on your behalf.</p>
                        <div className="OrContainer">
                            <p>OR</p>
                        </div>
                    </div>
                    <div className="SignUpWithEmailContainer">
                        <h2>Sign up with email</h2>
                        <input placeholder="Email"/>
                        <input placeholder="Create your password"/>
                        <p className="Caption">Password must be at least 8 characters</p>
                        <div className="EmailSignUpButton">
                            <p>Create account</p>
                        </div>
                    </div>
                </div>
            </SignUpPageContainer>
        </>
    );
};

export default Registration;