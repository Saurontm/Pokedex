import { ListWrapper } from "../styles";
import Pokemon from "./Pokemon";
import SearchBar from "./SearchBar";
import { useState } from "react";

const PokemonList = (props) => {
  const [query, setQuery] = useState("");
  const pokemonList = props.pokemon
    .filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((pokemon) => <Pokemon pokemon={pokemon} />);
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{pokemonList}</ListWrapper>
    </div>
  );
};

export default PokemonList;
