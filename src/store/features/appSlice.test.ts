import reducer, { AppState, initialState, setResults } from "./appSlice";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: "unknown" })).toEqual(initialState);
});

test("should handle setResults", () => {
  const moviesToInsert = [
    {
      id: 1,
      title: "Tarzán",
      release_date: "02/05/2006",
      poster_path: "poster.jpg",
      overview: "A man raised by monkeys.",
    },
  ];

  expect(
    reducer(
      initialState as AppState,
      setResults({
        page: 1,
        results: moviesToInsert,
      }),
    ),
  ).toEqual({ ...initialState, page: 1, movies: moviesToInsert });
});
