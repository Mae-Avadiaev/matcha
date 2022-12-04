import styled, {css} from "styled-components";

const buttonProperties = css`
  box-sizing: border-box;
  border-radius: 8px;
  height: 40px;
  padding: 0 18px;
`

export const ButtonContainer = styled.div`
  ${buttonProperties};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  p {
    font-weight: 600;
    font-size: 0.875rem;
    z-index: 10;
    pointer-events: none;
  }

  img {
    width: 1em;
    margin-right: 10px;
    z-index: 10;
  }
`

export const ButtonBackground = styled.div`
  ${buttonProperties};
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 5;

  &:hover {
    filter: brightness(90%);
    transition: filter 0.2s;
  }
`