import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import testWrapper from "../../../../../mocks/testWrapper";
// mock data
import searchPokemonGraphql_Mew from "../../../../../mocks/searchPokemonGraphql_Mew";
// components
import CardPokemonV2 from "./CardPokemonV2";

test("loads CardPokemonV2 and test rendering", async () => {
  render(<CardPokemonV2 {...searchPokemonGraphql_Mew} />, { wrapper: testWrapper });
  const titleMew = await screen.findByText("Mew");
  expect(titleMew).toBeVisible();
});
