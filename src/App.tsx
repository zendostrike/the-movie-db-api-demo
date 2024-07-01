import React from "react";
import debounce from "lodash.debounce";

import { Error, Loader, Movies, Search } from "./components";

import { fetchMovies, search } from "./store/features/appSlice";
import { useAppDispatch, useAppSelector } from "./store/store";

import "./App.css";

function App() {
  const { searchText, movies, error, loading } = useAppSelector(
    (state) => state.app,
  );
  const dispatch = useAppDispatch();

  const handleSearchDebouncer = React.useRef(
    debounce(async (value: string) => {
      dispatch(fetchMovies(value));
    }, 350),
  ).current;

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // Manejo el estado del input en redux solo para demo, podria perfectamente ser un useState
    dispatch(search(e.target.value));
    handleSearchDebouncer(e.target.value);
  };

  React.useEffect(() => {
    return () => {
      handleSearchDebouncer.cancel();
    };
  }, [handleSearchDebouncer]);

  return (
    <main className="container">
      <Search onChange={handleChange} value={searchText} />

      <div className="content">
        {error ? <Error /> : null}

        {loading ? (
          <div className="loader__wrapper">
            <Loader />
          </div>
        ) : null}

        {!error && !loading ? <Movies items={movies} /> : null}
      </div>
    </main>
  );
}

export default App;
