import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
// gql
import { GET_POKEMON_WITH_NAME } from "../../services/graphql/queries/getPokemon";
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
import CardPokemonV2 from "./components/CarPokemonV2/CardPokemonV2";
// types & api & classes
import PokedexFormValidator from "./PokedexForm.validator";
import { PokemonSearchApiRessource } from "../../services/apiRessources/pokemonSearchApiRessource";
import { Pokedex } from "../../Types/Pokemon";
import { getPokemonWithNameQuery } from "../../services/graphql/queries/__generated__/get-pokemon-with-name-query";
import { H1Styled } from "../../styles/generic";

export default function () {
  const [loadingRest, setLoadingRest] = useState(false);
  const [loadingGraphql, setLoadingGraphql] = useState(false);
  const [pokedexRest, setPokedexRest] = useState<Pokedex | null>(null);
  const [pokedexGraphql, setPokedexGraphql] =
    useState<getPokemonWithNameQuery | null>(null);
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

  const {
    control: controlGraphql,
    handleSubmit: handleSubmitGraphql,
    formState: formStateGraphql,
  } = useForm({
    resolver: classValidatorResolver(PokedexFormValidator),
    defaultValues: {
      name: "",
    },
  });

  const onSubmitRest = async (data: any) => {
    setLoadingRest(true);
    const result = await new PokemonSearchApiRessource().searchPokemon(
      data.name
    );
    setPokedexRest(result);
    setLoadingRest(false);
  };

  const [getPokemonGraphQlQuery] = useLazyQuery(GET_POKEMON_WITH_NAME);
  const onSubmitGraphql = async (data: any) => {
    setLoadingGraphql(true);
    const result = await getPokemonGraphQlQuery({
      variables: {
        name: data.name,
      },
    });
    const pokemonInfo = result.data as getPokemonWithNameQuery;
    setPokedexGraphql(pokemonInfo);

    setLoadingGraphql(false);
  };

  return (
    <DefaultLayout className="pokedex">
      <H1Styled>
        <img src="/images/pokedex.png" alt="pokedex" /> Pokedex
      </H1Styled>
      <CaptionStyled>Do not search any other pokemon than the first generation or this website will burn your computer</CaptionStyled>
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
        <section className="pokemon-graphql">
          <h2>Graphql</h2>
          <p>Example: bulbasaur, charizard, venusaur, gyarados, snorlax, mew</p>
          <FormStyled onSubmit={handleSubmitGraphql(onSubmitGraphql)}>
            <Controller
              name="name"
              control={controlGraphql}
              render={({ field }) => (
                <TextField {...field} label="Pokemon Name GraphQl" />
              )}
            />
            <Button
              onClick={handleSubmitGraphql(onSubmitGraphql)}
              endIcon={loadingGraphql && <CircularProgress size={15} />}
            >
              Search GraphQl
            </Button>
          </FormStyled>
          <ErrorText>{formStateGraphql.errors.name?.message}</ErrorText>

          {pokedexGraphql && <CardPokemonV2 {...pokedexGraphql} />}
        </section>
      </ContainerStyled>
    </DefaultLayout>
  );
}
