// styles
import { ImageStyled } from "./Image.style";


export default function Image(props: { src: string, title: string }) {
    return <ImageStyled src={props.src} title={props.title}/>
}