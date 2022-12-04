import {ButtonContainer, ButtonBackground} from "./button.styles";

interface ButtonProps {
    caption:string,
    icon?: string
}

function Button(props:ButtonProps) {
    return(
        <ButtonContainer>
            <ButtonBackground/>
            {props.icon &&
                <img src={props.icon} alt="Button icon"/>
            }
            <p>{props.caption}</p>
        </ButtonContainer>
    )
}

export default Button