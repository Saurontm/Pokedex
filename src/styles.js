import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    background-color: ${(props) => props.theme.backgroundColor};
}
`;

export const WebsiteImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
