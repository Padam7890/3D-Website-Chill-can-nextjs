import {MainHeroTypes } from "@/utils/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainheroSectionApi = createApi({
  reducerPath: "api/main-hero-section",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  tagTypes: ["main-hero-section"],
  endpoints: (builder) => ({
    getMainHeroSection: builder.query<MainHeroTypes, void>({
      query: () => "/hero-section",
      providesTags: ["main-hero-section"],


    }),
  }),
});

export const {useGetMainHeroSectionQuery} =mainheroSectionApi;
