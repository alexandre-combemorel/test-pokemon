import { useState } from 'react'
import { DefaultLayout } from "../../layouts/Default/Default";
import { H1Styled } from "../../styles/generic";
import { ButtonStyled } from './components/Exo.styles';
import { Exo1 } from './components/Exo1';
import { Exo2 } from './components/Exo2';
import { Exo3 } from './components/Exo3';

export const Exercices = () => {
    const [showExercice1, setShowExercice1] = useState(false)
    const [showExercice2, setShowExercice2] = useState(false)
    const [showExercice3, setShowExercice3] = useState(false)
    return (
    <DefaultLayout className="pokedex">
        <H1Styled>
            Exercices
        </H1Styled>
        {showExercice1 ? <Exo1 onClose={() => setShowExercice1(false)} /> : <ButtonStyled onClick={() => setShowExercice1(true)} >Show exercice 1</ButtonStyled>}
        {showExercice2 ? <Exo2 onClose={() => setShowExercice2(false)} /> : <ButtonStyled onClick={() => setShowExercice2(true)} >Show exercice 2</ButtonStyled>}
        {showExercice3 ? <Exo3 onClose={() => setShowExercice3(false)} /> : <ButtonStyled onClick={() => setShowExercice3(true)} >Show exercice 3</ButtonStyled>}
    </DefaultLayout>
    )
}