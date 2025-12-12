import { useState } from "react";
import { BoxStyled, ButtonStyled, CloseButton, ExerciceContainer, ResultBox } from "./Exo.styles";

/**
 * This component have a problem :
 * 
 */
export const Exo1 = ({onClose}: {onClose: () => void}) => {
	const [number, setNumber] = useState(0);

	const onAdd = () => {
		setTimeout(() => {
			setNumber(number + 1);
		}, 400);
	};

	const onRemove = () => {
		setTimeout(() => {
			setNumber(number - 1);
		}, 400);
	};

	return (
		<ExerciceContainer>
      <CloseButton onClick={onClose}>X</CloseButton>
      <h2>Exercice 1</h2>
			<BoxStyled>
				<ButtonStyled onClick={onAdd}>Add</ButtonStyled>
        <ResultBox>{number}</ResultBox>
				<ButtonStyled onClick={onRemove}>Remove</ButtonStyled>
			</BoxStyled>
		</ExerciceContainer>
	);
};
