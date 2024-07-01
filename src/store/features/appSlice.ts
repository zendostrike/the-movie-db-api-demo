import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { Movie, SeachMoviesResponse } from "../types";

export interface AppState {
  searchText: string;
  movies: Movie[];
  page?: number;
  loading?: boolean;
  error?: boolean;
}

const initialState: AppState = {
  searchText: "",
  movies: [],
};

export const fetchMovies = createAsyncThunk(
  "movies/fetch",
  // Declare the type your function argument here:
  async (query: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/search/movie?api_key=${import.meta.env.VITE_THE_MOVIE_DB_API_KEY}&query=${query}`,
      );
      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(response.status);
      }

      return data as SeachMoviesResponse;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      throw rejectWithValue(e.response.data);
    }
  },
);

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    search: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setResults: (
      state,
      action: PayloadAction<{ page?: number; results: Movie[] }>,
    ) => {
      state.movies = action.payload.results;
      state.page = action.payload.page;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
      state.error = false;
    });

    builder.addCase(fetchMovies.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });

    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload.results;
      state.loading = false;
      state.error = false;
    });
  },
});

export const { search, setResults } = appSlice.actions;

export default appSlice.reducer;
