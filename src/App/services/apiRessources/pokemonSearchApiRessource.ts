import { Pokedex } from "../../Types/Pokemon"
import { BaseApiRessource } from "./baseApiRessource"

export class PokemonSearchApiRessource extends BaseApiRessource {
    searchPokemon(pokemonName: string): Promise<any> {
        return this.get<Pokedex>(`/pokemon/${pokemonName}`)
    }
}