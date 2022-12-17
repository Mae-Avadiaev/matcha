import {StyledFooter} from "./footer.styles";
import {useLocation} from "react-router-dom";


function Footer() {

    const location = useLocation().pathname
    const isStartingPage = location === '/'

    return (
        <StyledFooter isStartingPage={isStartingPage}>
            <p>2023 © Made by mclown with 🧠. 42 Paris. Go to&nbsp;
                <a target="_blank" href="https://github.com/Mitia-Avadiaev/matcha">GitHub</a>.
            </p>
        </StyledFooter>
    )
}

export default Footer