import { PokemonWrapper } from "../styles";
import { Link } from "react-router-dom";

const Pokemon = (props) => {
  return (
    <PokemonWrapper>
      <p className="pokemonID">{props.pokemon.id}</p>
      <Link to={`/${props.pokemon.name.toLowerCase()}`}>
        <img alt={props.pokemon.name} src={props.pokemon.imageURL} />
      </Link>
      <p className="pokemonName">{props.pokemon.name}</p>
      <p className="pokemonType">{props.pokemon.type.join(" - ")}</p>
    </PokemonWrapper>
  );
};

export default Pokemon;
