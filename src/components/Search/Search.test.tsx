import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Search } from "./Search";

test("loads correctly with passed value", () => {
  render(<Search onChange={jest.fn()} value="ok" />);

  expect(screen.getByDisplayValue("ok")).toBeInTheDocument();
});

test("handles correct input change event", async () => {
  const user = userEvent.setup();

  const mockChange = jest.fn();

  render(<Search onChange={mockChange} value="ok" />);

  const input = screen.getByRole("textbox");

  await user.type(input, "new value");

  expect(mockChange).toHaveBeenCalled();
});
