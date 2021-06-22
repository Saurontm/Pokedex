import { ListWrapper } from "../styles";
import Pokemon from "./Pokemon";

const PokemonList = (props) => {
  const pokemonList = props.pokemon.map((pokemon) => (
    <Pokemon pokemon={pokemon} />
  ));
  return (
    <div>
      <ListWrapper>{pokemonList}</ListWrapper>
    </div>
  );
};

export default PokemonList;
