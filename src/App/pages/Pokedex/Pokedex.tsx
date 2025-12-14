import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
// lib components
import { Button, CircularProgress, TextField } from "@mui/material";
// components & styles
import { DefaultLayout } from "../../layouts/Default/Default";
import {
	CaptionStyled,
	ContainerStyled,
	ErrorText,
	FormStyled,
} from "./Pokedex.styles";
import CardPokemon from "./components/CarPokemon/CardPokemon";
// types & api & classes
import PokedexFormValidator from "./PokedexForm.validator";
import { PokemonSearchApiRessource } from "../../services/apiRessources/pokemonSearchApiRessource";
import type { Pokedex } from "../../Types/Pokemon";
import { H1Styled } from "../../styles/generic";

export default function () {
	const [loadingRest, setLoadingRest] = useState(false);
	const [pokedexRest, setPokedexRest] = useState<Pokedex | null>(null);
	const {
		control: controlRest,
		handleSubmit: handleSubmitRest,
		formState: formStateRest,
	} = useForm({
		resolver: classValidatorResolver(PokedexFormValidator),
		defaultValues: {
			name: "",
		},
	});

	const onSubmitRest = async (data: any) => {
		setLoadingRest(true);
		const result = await new PokemonSearchApiRessource().searchPokemon(
			data.name,
		);
		setPokedexRest(result);
		setLoadingRest(false);
	};

	return (
		<DefaultLayout className="pokedex">
			<H1Styled>
				<img src="/images/pokedex.png" alt="pokedex" /> Pokedex
			</H1Styled>
			<CaptionStyled>
				Do not search any other pokemon than the first generation or this
				website will burn your computer
			</CaptionStyled>
			<ContainerStyled>
				<section className="pokemon-rest">
					<h2>Rest</h2>
					<p>Example: raichu, arbok, pikachu, caterpie, pidgey, fearow</p>
					<FormStyled onSubmit={handleSubmitRest(onSubmitRest)}>
						<Controller
							name="name"
							control={controlRest}
							render={({ field }) => (
								<TextField {...field} label="Pokemon Name Rest" />
							)}
						/>
						<Button
							onClick={handleSubmitRest(onSubmitRest)}
							endIcon={loadingRest && <CircularProgress size={15} />}
						>
							Search Rest
						</Button>
					</FormStyled>
					<ErrorText>{formStateRest.errors.name?.message}</ErrorText>

					{pokedexRest && <CardPokemon {...pokedexRest} />}
				</section>
			</ContainerStyled>
		</DefaultLayout>
	);
}
