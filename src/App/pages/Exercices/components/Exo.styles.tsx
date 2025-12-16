import { Box, Button, Input, IconButton } from "@mui/material";
import styled from "styled-components";

export const ExerciceContainer = styled.div`
  border: 1px solid #fff;
  border-radius: 16px;
  padding: 10px;
  justify-content: center;
  width: fit-content;
  position: relative;
  margin: 10px;
`;

export const BoxStyled = styled(Box)`
  display: flex;
`;

export const ButtonStyled = styled(Button)`
  margin: 4px;
  border: 1px solid #ccc;
  padding: 4px;
  border-radius: 4px;
`;

export const ResultBox = styled(Box)`
  margin: 4px;
  border: 1px solid #faa;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 8px;
  width: fit-content;
  height: fit-content;
`;

export const InputStyled = styled(Input)`
  margin: 4px;
  border: 1px solid #ccc;
  padding: 4px;
  border-radius: 4px;
`;
