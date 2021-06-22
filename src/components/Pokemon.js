import { PokemonWrapper } from "../styles";
// import { Link } from "react-router-dom";

const Pokemon = (props) => {
  return (
    <PokemonWrapper>
      {/* <Link to={`/products/${props.sneaker.slug}`}> */}
      <p className="pokemonID">{props.pokemon.id}</p>
      <img alt={props.pokemon.name} src={props.pokemon.imageURL} />
      <p className="pokemonName">{props.pokemon.name}</p>
      <p className="pokemonType">{props.pokemon.type.join(" - ")}</p>

      {/* </Link> */}
    </PokemonWrapper>
  );
};

export default Pokemon;
