import { IsString, IsNotEmpty } from "class-validator";

export default class PokedexFormValidator {
	@IsNotEmpty({ message: "You must provide a name to search a pokémon" })
	@IsString()
	name: string = "";
}
