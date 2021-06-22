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

export const PokemonWrapper = styled.div`
  margin: 70px;
  ${"" /* text-align: center; */}
  img {
    width: auto;
    height: 180px;
    display: block;
    margin: 0 auto;
  }
  p {
    text-align: left;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    &.pokemonName {
      color: ${(props) => props.theme.mainColor};
      font-size: 200%;
    }

    &.pokemonID {
      color: ${(props) => props.theme.secondaryColor};
      text-align: left;
      font-size: 250%;
      margin-top: -20px;
    }
    &.pokemonType {
      color: ${(props) => props.theme.secondaryColor};
      font-size: 100%;
      margin-top: -30px;
    }
  }
`;

export const ListWrapper = styled.div`
  display: flex; /* allows us to use Flexbox */
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
