import {Caption} from "../welcome/welcome.styles";
import {SignInPageContainer, StyledLink, SignInContainer, SectionInscription} from "./signIn.styles";
import Button from "../button/button.component";
import {Input} from "../input/input.styles";
import {useLocation} from "react-router-dom";


function SignIn() {

    // const location = useLocation().pathname
    // const isStartingPage = location === '/'

    return (
        <SignInPageContainer>
            <SignInContainer>
                <h2>Sign in to Matcha</h2>
                <SectionInscription>Please enter your sign in details.</SectionInscription>
                <Caption>Login</Caption>
                <Input placeholder="Email or phone number" width="320px"/>
                <Caption>Password</Caption>
                <Input placeholder="Password" width="320px"/>
                <Button caption="Sign me in!" onClick={() => {}}/>
                <StyledLink>Forgot your password?</StyledLink>
            </SignInContainer>
        </SignInPageContainer>
    )
}

export default SignIn