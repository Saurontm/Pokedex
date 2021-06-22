import { ThemeProvider } from "styled-components";
import headerImage from "./assets/pokedexHeader.png";
import { WebsiteImage } from "./styles";
import { GlobalStyle } from "../src/styles";
import "./App.css";

const theme = {
  mainColor: "#FAF6F6",
  backgroundColor: "#3E3E3E",
  secondaryColor: "#A5A5A5",
};

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <WebsiteImage
          id="header-image"
          src={headerImage}
          alt="Pokedex"
        ></WebsiteImage>
      </ThemeProvider>
    </div>
  );
}

export default App;
