import { render } from "@testing-library/react";
import { Loader } from "./Loader";
import { TEST_ID_LOADER } from "./constants";

test("loads and is present in the doc", () => {
  const element = render(<Loader />);

  const loaderEl = element.getByTestId(TEST_ID_LOADER);

  expect(loaderEl).toBeInTheDocument();
});
