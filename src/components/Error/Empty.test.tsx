import { render, screen } from "@testing-library/react";

import { ERROR_DEFAULT_MESSAGE, Error } from "./Error";

test("loads and show default message", () => {
  render(<Error />);

  expect(screen.getByRole("heading")).toHaveTextContent(ERROR_DEFAULT_MESSAGE);
});

test("loads and show passsed by prop message", () => {
  const message = "macchu picchu";

  render(<Error message={message} />);

  expect(screen.getByRole("heading")).toHaveTextContent(message);
});
