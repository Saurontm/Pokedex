import { PokemonWrapper } from "../styles";
import { Link } from "react-router-dom";

const Pokemon = (props) => {
  return (
    <PokemonWrapper>
      <p className="pokemonID">{props.pokemon.id}</p>
      <Link to={`/${props.pokemon.name.toLowerCase()}`}>
        <img alt={props.pokemon.name} src={props.pokemon.imageURL} className='pokemonImg'/>
      </Link>
      <p className="pokemonName">{props.pokemon.name}</p>
      {props.pokemon.typeTags.map((type) => type)}
    </PokemonWrapper>
  );
};

export default Pokemon;
