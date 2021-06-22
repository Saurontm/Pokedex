import { ThemeProvider } from "styled-components";
import headerImage from "./assets/pokedexHeader.png";
import { WebsiteImage } from "./styles";
import { GlobalStyle } from "../src/styles";
import "./App.css";
import pokemon from "./data";
import PokemonList from "./components/PokemonList";
import { Route } from "react-router";
import { Switch } from "react-router";
import PokemonDetails from "./components/PokemonDetails";
import { Link } from "react-router-dom";

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
        <Link to={`/`}>
          <WebsiteImage
            id="header-image"
            src={headerImage}
            alt="Pokedex"
          ></WebsiteImage>
        </Link>
        <Switch>
          <Route exact path="/">
            <PokemonList pokemon={pokemon}></PokemonList>
          </Route>
          <Route path="/:productSlug">
            <PokemonDetails pokemon={pokemon}></PokemonDetails>
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
