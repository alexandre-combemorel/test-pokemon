// styles & components
import { LinkStyled, MenuStyled } from "./Menu.style"
import { Chip } from "@mui/material"
// assets
// import pokedexImage from "../../../../public"

export default function Menu() {
    return <nav className="menu">
        <MenuStyled position="static">
            <img src={"/chance-icon.svg"} alt="Chance icon" width={30} />
            <LinkStyled to={"/"}><Chip label="Home" /></LinkStyled>
            <LinkStyled to={"/gallery"}><Chip label="📷 Gallery" /></LinkStyled>
            <LinkStyled to={"/pokedex"}><Chip label="Pokedex" icon={<img src={"/images/pokedex.png"} width="17"/>} /></LinkStyled>
            <LinkStyled to={"/pokedex-listing"}><Chip label="Pokedex Listing" icon={<img src={"/images/pokeball.png"} width="17"/>} /></LinkStyled>
        </MenuStyled>
    </nav>
}