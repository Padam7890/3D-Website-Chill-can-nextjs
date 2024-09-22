import { configureStore } from "@reduxjs/toolkit";
import { mainheroSectionApi } from "./api/hero-section/hero-section";
import { SecondHeroSection } from "./api/second-hero-section/second-hero-section";

export const store = configureStore({
  reducer: {
    [mainheroSectionApi.reducerPath]: mainheroSectionApi.reducer,
    [SecondHeroSection.reducerPath]: SecondHeroSection.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainheroSectionApi.middleware, SecondHeroSection.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
