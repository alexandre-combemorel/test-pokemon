import { AppBar } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(Link)`
    text-decoration: none;
    margin-left: 10px;
    .MuiChip-root {
        cursor: pointer;
    }
`

export const MenuStyled = styled(AppBar)`
    padding: 10px;
    flex-direction: row;
`