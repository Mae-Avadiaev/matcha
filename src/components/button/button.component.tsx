import {ButtonContainer, ButtonBackground} from "./button.styles";
import {MouseEventHandler} from "react";

interface ButtonProps {
    caption: string,
    onClick: MouseEventHandler<HTMLDivElement>,
    icon?: string
}

function Button(props:ButtonProps) {
    return(
        <ButtonContainer onClick={props.onClick}>
            <ButtonBackground/>
            {props.icon &&
                <img src={props.icon} alt="Button icon"/>
            }
            <p>{props.caption}</p>
        </ButtonContainer>
    )
}

export default Button