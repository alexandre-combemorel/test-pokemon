import { Chip } from "@mui/material";
import { Pokedex } from "../../../../Types/Pokemon";
import { BoxStyled, CardStyled } from "./CardPokemon.styles";


export default function CardPokemon(props: Pokedex) {
    return <BoxStyled>
    <CardStyled variant="outlined">
      <div>
        <h2>{props.name}</h2>
        <img src={props.sprites.front_default} alt={props.name} />
        <img src={props.sprites.back_default} alt={props.name} />
      </div>
      <div>
        <Chip label="Stats" />
        <ul>
          {props.stats.map((stat) => (
            <li key={stat.stat.name}>
              {stat.stat.name} : {stat.base_stat}
            </li>
          ))}
        </ul>
        <Chip label="Abilities" />
        <ul>
          {props.abilities.map((ability) => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))}
        </ul>
        <Chip label="General info" />
        <ul>
          <li>weight: {props.weight}</li>
          <li>height: {props.height}</li>
        </ul>
      </div>
    </CardStyled>
  </BoxStyled>
}