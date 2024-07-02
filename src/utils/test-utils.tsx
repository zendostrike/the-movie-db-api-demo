import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";

import { store as myStore } from "../store/store";
import { AppState } from "../store/features/appSlice";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: Partial<AppState>;
  store?: AppState;
}

export function renderWithProviders(
  ui: React.ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {},
) {
  const {
    // Automatically create a store instance if no store was passed in
    store,
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={myStore}>{children}</Provider>
  );

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
