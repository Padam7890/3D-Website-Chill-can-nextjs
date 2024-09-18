import { configureStore } from "@reduxjs/toolkit";
import { mainheroSectionApi } from "./api/hero-section/hero-section";

export const store = configureStore({
  reducer: {
    [mainheroSectionApi.reducerPath]: mainheroSectionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainheroSectionApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
