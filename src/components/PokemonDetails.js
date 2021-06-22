import { DetailWrapper, BackButton } from "../styles";
import { useParams, Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import { EvolutionsTitle, EvolutionsWrapper } from "../styles";
import Pokemon from "./Pokemon";

const PokemonDetails = (props) => {
  const history = useHistory();
  const pokemonSlug = useParams().productSlug;
  const pokemon = props.pokemon.find(
    (pokemon) => pokemon.name.toLowerCase() === pokemonSlug
  );

  if (!pokemon) return <Redirect to="/" />;
  return (
    <div>
      <DetailWrapper>
        <BackButton onClick={() => history.goBack()}>back</BackButton>
        <img src={pokemon.imageURL} alt={pokemon.name} />
        <p className="pokemonID">{pokemon.id}</p>
        <p className="pokemonName">{pokemon.name}</p>
        <p className="pokemonType">{pokemon.type.join(" - ")}</p>
        <p className="pokemonEntry">{pokemon.entry}</p>
      </DetailWrapper>
      {pokemon.hasOwnProperty("pre") || pokemon.hasOwnProperty("next") ? (
        <EvolutionsTitle>Evolutions</EvolutionsTitle>
      ) : (
        ""
      )}
      <EvolutionsWrapper>
        {pokemon.hasOwnProperty("pre") ? (
          <Pokemon
            pokemon={props.pokemon.find((pre) => pre.id === pokemon.pre)}
          />
        ) : (
          ""
        )}
        {pokemon.hasOwnProperty("next") ? (
          <Pokemon
            pokemon={props.pokemon.find((next) => next.id === pokemon.next)}
          />
        ) : (
          ""
        )}
      </EvolutionsWrapper>
    </div>
  );
};

// if (props.upgrade.hasOwnProperty("opens")) {
//     gameRules.find((rule) => rule.id === props.upgrade.opens).status = true;
//   }

export default PokemonDetails;
