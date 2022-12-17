import {SectionInscription, SignInContainer, SignInPageContainer, StyledLink} from "../signIn/signIn.styles";
import {Caption} from "../welcome/welcome.styles";
import {Input} from "../input/input.styles";
import Button from "../button/button.component";

function SignUp() {

    // const location = useLocation().pathname
    // const isStartingPage = location === '/'

    return (
        <SignInPageContainer>
            <SignInContainer>
                <h2>Create new account</h2>
                <SectionInscription>Be one of the first Matcha friends.</SectionInscription>
                <Caption>Email</Caption>
                <Input placeholder="Email or phone number" width="320px"/>
                <Caption>Password</Caption>
                <Input placeholder="Password" width="320px"/>
                <Button caption="Sign me in!" onClick={() => {}}/>
                <StyledLink>Forgot your password?</StyledLink>
            </SignInContainer>
        </SignInPageContainer>
    )
}

export default SignUp