import { useState } from "react";
import {
  BoxStyled,
  ButtonStyled,
  CloseButton,
  ExerciceContainer,
  InputStyled,
  ResultBox,
} from "./Exo.styles";

const sleep = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
/**
 * This method should return the nth fibonnacci number.
 * for exemple :
 * 0 should return 0
 * 1 should return 1
 * 2 should return 1
 * 3 should return 2
 * 4 should return 3
 * 5 should return 5
 * 6 should return 8
 * 7 should return 13
 *
 * 2 method should be implemented recursive method and non-recursive one.
 * Wich method is the most optimized ?
 */
export const compute = async (number: number) => {
  const start = Date.now();
  console.log("start with number : ", number);
  await sleep(1000); // To delete
  console.log(`end elapsed time : ${Date.now() - start}ms`);
  return number;
};

export const Exo3 = ({ onClose }: { onClose: () => void }) => {
  const [number, setNumber] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const onClick = async (number: number) => {
    const computedValue = await compute(number);
    setResult(computedValue);
  };

  return (
    <ExerciceContainer>
      <CloseButton onClick={onClose}>X</CloseButton>
      <h2>Exercice 3</h2>
      <BoxStyled>
        <InputStyled
          name="myInput"
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <ButtonStyled onClick={() => onClick(number)}>Compute</ButtonStyled>
        <ResultBox>{result}</ResultBox>
      </BoxStyled>
    </ExerciceContainer>
  );
};
