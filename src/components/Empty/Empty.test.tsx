import { render, screen } from "@testing-library/react";
import { EMPTY_DEFAULT_MESSAGE, Empty } from "./Empty";

test("loads and show default message", () => {
  render(<Empty />);

  expect(screen.getByRole("heading")).toHaveTextContent(EMPTY_DEFAULT_MESSAGE);
});

test("loads and show passsed by prop message", () => {
  const message = "macchu picchu";
  render(<Empty message={message} />);

  expect(screen.getByRole("heading")).toHaveTextContent(message);
});
