import { screen } from "@testing-library/react";
import App from "./App";
import { TEST_ID_EMPTY } from "./components/Empty/constants";
import { renderWithProviders } from "./utils/test-utils";

test("loads and displays correctly", () => {
  renderWithProviders(<App />);

  expect(screen.getByTestId(TEST_ID_EMPTY)).toBeInTheDocument();
});
