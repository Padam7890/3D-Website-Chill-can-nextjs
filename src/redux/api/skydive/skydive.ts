import { SkydiveTypes } from "@/utils/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const skydiveApi = createApi({
  reducerPath: "skydiveApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getSkydive: builder.query<SkydiveTypes, void>({
      query: () => "/skydive",
    }),
  }),
});

export const { useGetSkydiveQuery } = skydiveApi;
