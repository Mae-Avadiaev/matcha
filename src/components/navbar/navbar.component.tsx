import {useLocation} from "react-router-dom";
import Button from "../button/button.component";
import {Logo, StyledNavbar} from "./navbar.styles";
import logo from "../../assets/logo.png"
import {useNavigate} from "react-router-dom";
import {SectionInscription} from "../signIn/signIn.styles";


function Navbar() {

    const location = useLocation().pathname

    const navigate = useNavigate()
    const goToSignIn = () => navigate('sign-in')
    const goToRegistration = () => navigate('/')
    const goToSignUp = () => navigate('/sign-up')

    return(
        <StyledNavbar location={location}>
            <Logo
                src={logo}
                alt="Matcha logo"
                isStartingPage={location === '/'}
                onClick={goToRegistration}
            />
            {location === '/' &&
            <Button caption="Sign in" onClick={goToSignIn}/>
            }
            {location === '/sign-in' &&
            <>
                <SectionInscription>Not a member?</SectionInscription>
                <Button caption="Join Matcha" onClick={goToSignUp}/>
            </>
            }
            {location === '/sign-up' &&
            <>
                <SectionInscription>Already a member?</SectionInscription>
                <Button caption="Sign in" onClick={goToSignIn}/>
            </>
            }
        </StyledNavbar>
    )
}

export default Navbar