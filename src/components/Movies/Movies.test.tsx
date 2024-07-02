import type { Movie } from "../../store/types";

import { render } from "@testing-library/react";
import { Movies } from "./Movies";
import { TEST_ID_EMPTY } from "../Empty/constants";
import { TEST_ID_CARD } from "./Card/constants";

const movieListMock = [
  {
    id: 1,
    title: "Tarzán",
    release_date: "02/05/2006",
    poster_path: "poster.jpg",
    overview: "A man raised by monkeys.",
  },
  {
    id: 2,
    title: "Wall-E",
    release_date: "02/05/2010",
    poster_path: "poster.jpg",
    overview: "A robot raised by garbage.",
  },
] as Movie[];

test("loads and show empty component", () => {
  const element = render(<Movies />);

  const emptyEl = element.getByTestId(TEST_ID_EMPTY);

  expect(emptyEl).toBeInTheDocument();
});

test("loads and show correct number of items passed", () => {
  const element = render(<Movies items={movieListMock} />);

  const cardsElements = element.getAllByTestId(TEST_ID_CARD);

  expect(cardsElements.length).toBe(2);
});
