import styled from "styled-components";

export const ContainerStyled = styled.div`
  display: flex;
  > section {
    width: 50%;
    padding: 1rem;
  }
`;

export const CaptionStyled = styled.p`
  font-size: 0.8rem;
  font-style: italic;
  color: grey;
`

export const FormStyled = styled.form`
  display: flex;
`;

export const ErrorText = styled.p`
  color: red;
`;
