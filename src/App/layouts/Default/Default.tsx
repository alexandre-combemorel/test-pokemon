import Menu from "../../components/Menu/Menu";
import { DefaultLayoutStyled, MainStyled } from "./Default.styles";

export function DefaultLayout(props: { children: any, className?: string }) {
    return <DefaultLayoutStyled className={props.className}>
        <Menu />
        <MainStyled>
            {props.children}
        </MainStyled>
    </DefaultLayoutStyled>
}
