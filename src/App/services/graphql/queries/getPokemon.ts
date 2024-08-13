import gql from "graphql-tag";
import { getPokemonWithNameQueryDocument } from "./__generated__/get-pokemon-with-name-query";

export const GET_POKEMON_WITH_NAME = gql`
  query getPokemonWithNameQuery($name: String!) {
    gen3_species: pokemon_v2_pokemonspecies(where: { name: { _eq: $name } }) {
      name
      id
      pokemon_v2_pokemons {
        weight
        height
        pokemon_v2_pokemonabilities {
          pokemon_v2_ability {
            name
          }
        }
        pokemon_v2_pokemonstats {
          pokemon_v2_stat {
            name
          }
          base_stat
        }
        pokemon_v2_pokemonsprites {
          sprites
        }
      }
    }
  }
` as getPokemonWithNameQueryDocument