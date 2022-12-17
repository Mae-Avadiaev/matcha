import styled from "styled-components";

export const Input = styled.input<{width: string}>`
  box-sizing: border-box;
  width: ${(p) => p.width};
  height: 40px;
  padding: 0 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  color: #2d2d2d;
  font-size: 0.875rem;
  transition: border-color .2s;

  &:hover, &:focus {
    border: solid 1px #6740F5;
    outline: none;
  }
`
