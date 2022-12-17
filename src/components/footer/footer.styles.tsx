import styled from "styled-components";

export const StyledFooter = styled.div<{isStartingPage: boolean}>`
  position: absolute;
  bottom: calc((24vh - 50px )/ 2);
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  
  p {
    text-align: center;
    color: ${(p) => p.isStartingPage ? "white" : "#767676"};
    font-size: 14px;
  }
  
  a {
    color: ${(p) => p.isStartingPage ? "white" : "#767676"};
    transition: color 0.2s;
    
    &:hover {
      color: ${(p) => p.isStartingPage ? "#DED7F4" : "#5D3ADD"};
    }
  }
`