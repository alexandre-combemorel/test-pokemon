import { Chip } from "@mui/material";
import { getPokemonWithNameQuery } from "../../../../services/graphql/queries/__generated__/get-pokemon-with-name-query";
import { BoxStyled, CardStyled } from "./CardPokemonV2.styles";


export default function CardPokemonV2(props: getPokemonWithNameQuery) {
    const pokemonInfo = props.gen3_species[0]
    const sprites = JSON.parse(pokemonInfo.pokemon_v2_pokemons[0].pokemon_v2_pokemonsprites[0].sprites)
    return <BoxStyled>
    <CardStyled variant="outlined">
      <div>
        <h2>{pokemonInfo.name}</h2>
        <img src={sprites.front_default} alt={pokemonInfo.name} />
        <img src={sprites.back_default} alt={pokemonInfo.name} />
      </div>
      <div>
        <Chip label="Stats" />
        <ul>
          {pokemonInfo.pokemon_v2_pokemons[0].pokemon_v2_pokemonstats.map((stat) => (
            <li key={stat.pokemon_v2_stat?.name}>
              {stat.pokemon_v2_stat?.name} : {stat.base_stat}
            </li>
          ))}
        </ul>
        <Chip label="Abilities" />
        <ul>
          {pokemonInfo.pokemon_v2_pokemons[0].pokemon_v2_pokemonabilities.map((ability) => (
            <li key={ability.pokemon_v2_ability?.name}>{ability.pokemon_v2_ability?.name}</li>
          ))}
        </ul>
        <Chip label="General info" />
        <ul>
          <li>weight: {pokemonInfo.pokemon_v2_pokemons[0].weight}</li>
          <li>height: {pokemonInfo.pokemon_v2_pokemons[0].height}</li>
        </ul>
      </div>
    </CardStyled>
  </BoxStyled>
}