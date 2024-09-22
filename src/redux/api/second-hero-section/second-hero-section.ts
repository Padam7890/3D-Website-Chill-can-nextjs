import { SecondHeroTypes } from "@/utils/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const SecondHeroSection = createApi({
  reducerPath: "api/second-hero-section",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  tagTypes: ["second-hero-section"],
  endpoints: (builder) => ({
    getSecondHeroSection: builder.query<SecondHeroTypes, void>({
      query: () => "/second-hero-section",
      providesTags: ["second-hero-section"],
    }),
  }),
});

export const { useGetSecondHeroSectionQuery } = SecondHeroSection;