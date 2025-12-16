import { useEffect, useState } from "react";
import {
  BoxStyled,
  ButtonStyled,
  CloseButton,
  ExerciceContainer,
  ResultBox,
} from "./Exo.styles";

/**
 * This component have a problem :
 * It should update the number every 100ms
 * But when the component stop being displayed, it continue to update the number
 */
const SubComponent = ({
  onClose,
  setNumber,
}: {
  onClose: () => void;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
}) => {
  // biome-ignore lint/correctness/useExhaustiveDependencies: <only on mount>
  useEffect(() => {
    setInterval(() => {
      setNumber((current: number) => current + 1);
    }, 100);
  }, []);
  return (
    <BoxStyled>
      "updating"
      <ButtonStyled onClick={onClose}>Stop updating</ButtonStyled>
    </BoxStyled>
  );
};

export const Exo2 = ({ onClose }: { onClose: () => void }) => {
  const [number, setNumber] = useState<number>(0);
  const [updating, setUpdating] = useState<boolean>(false);

  return (
    <ExerciceContainer>
      <CloseButton onClick={onClose}>X</CloseButton>
      <h2>Exercice 2</h2>
      <BoxStyled>
        <ButtonStyled onClick={() => setUpdating(true)}>
          StartUpdating
        </ButtonStyled>
        <ResultBox>{number}</ResultBox>
        {updating && (
          <SubComponent
            onClose={() => setUpdating(false)}
            setNumber={setNumber}
          />
        )}
      </BoxStyled>
    </ExerciceContainer>
  );
};
