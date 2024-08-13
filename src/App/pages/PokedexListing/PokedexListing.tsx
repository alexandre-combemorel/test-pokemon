import { DefaultLayout } from "../../layouts/Default/Default";
import { H1Styled } from "../../styles/generic";


export default function(props: any) {
    return <DefaultLayout className="pokedex-listing">
        <H1Styled><img src={"/images/pokeball.png"} width="50"/> Pokedex Listing</H1Styled>
        <p>Here are the 150 first true real pokemons, any other one are fake or impostor</p>
    </DefaultLayout>
}