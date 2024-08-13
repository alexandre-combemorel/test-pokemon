import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import testWrapper from "../../../mocks/testWrapper";
// components
import Pokedex from "./Pokedex";

test("loads Pokedex and test Rest Query", async () => {
  render(<Pokedex />, { wrapper: testWrapper });

  const inputRest = screen.getByLabelText("Pokemon Name Rest");
  expect(inputRest).toBeVisible();

  const buttonRest = screen.getByText("Search Rest");
  expect(buttonRest).toBeVisible();

  await userEvent.type(inputRest, "pikachu");
  await userEvent.click(buttonRest);
  const titlePikachu = await screen.findByText("Pikachu");
  expect(titlePikachu).toBeVisible();
});
