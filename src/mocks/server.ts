import { setupServer } from 'msw/node'
import { rest } from 'msw';
// mock data
import searchPokemon_Pikachu from './searchPokemonRest_Pikachu';
// This configures a request mocking server with the given request handlers.
const baseApiUrl = "https://pokeapi.co/api/v2";
export const server = setupServer(
    rest.get(`${baseApiUrl}/pokemon/pikachu`, (req, res, ctx) => {
        return res(ctx.json(searchPokemon_Pikachu));
    })
)