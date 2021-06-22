import { DetailWrapper, BackButton } from "../styles";
import { useParams, Redirect } from "react-router";
import { useHistory } from "react-router-dom";

const PokemonDetails = (props) => {
  const history = useHistory();
  const pokemonSlug = useParams().productSlug;
  const pokemon = props.pokemon.find(
    (pokemon) => pokemon.name.toLowerCase() === pokemonSlug
  );

  if (!pokemon) return <Redirect to="/" />;
  return (
    <div>
      {/* <Helmet>
        <title>{sneaker.name}</title>
        <meta name="description" content="Helmet application" />
      </Helmet> */}
      <DetailWrapper>
        <BackButton onClick={() => history.goBack()}>back</BackButton>
        <img src={pokemon.imageURL} alt={pokemon.name} />
        <p className="pokemonID">{pokemon.id}</p>
        <p className="pokemonName">{pokemon.name}</p>
        <p className="pokemonType">{pokemon.type.join(" - ")}</p>
        <p className="pokemonEntry">{pokemon.entry}</p>
      </DetailWrapper>
    </div>
  );
};

export default PokemonDetails;
