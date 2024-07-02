import { render } from "@testing-library/react";
import { Card } from "./Card";
import {
  DESC_MAX_CHARS,
  IMG_FOUND_MESSAGE_PREFIX,
  IMG_NOT_FOUND_MESSAGE,
} from "./constants";

import type { Props } from "./types";

const mock = {
  title: "Harry Potter",
  subTitle: "01/05/2000",
  description: "A nice movie.",
  img: "poster.jpg",
};

const setup = (props?: Partial<Props>) => {
  return render(<Card {...mock} {...props} />);
};

test("loads and shows valid img", () => {
  const element = setup();

  const img = element.getByAltText(`${IMG_FOUND_MESSAGE_PREFIX} ${mock.title}`);

  expect(img).toBeInTheDocument();
});

test("loads and shows not found img", () => {
  const element = setup({ img: undefined });

  const img = element.getByAltText(IMG_NOT_FOUND_MESSAGE);

  expect(img).toBeInTheDocument();
});

test("loads and shows full description if less than limit", () => {
  const element = setup();

  const descEl = element.getByRole("paragraph");

  expect(descEl.innerHTML.length).toBe(mock.description.length);
});

test("loads and shows sliced description if more than limit", () => {
  const element = setup({ description: [...Array(DESC_MAX_CHARS + 1)].join() });

  const descEl = element.getByRole("paragraph");

  expect(descEl.innerHTML.length).toBe(DESC_MAX_CHARS);
});
