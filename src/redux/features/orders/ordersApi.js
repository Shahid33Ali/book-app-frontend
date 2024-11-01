import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/orders`,
  credentials: "include",
});
const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery,
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: "/",
        method: "POST",
        body: order,
      }),
    }),
    getOrderByEmail: builder.query({
      query: (email) => ({
        url: `/email/${email}`,
      }),
      providesTags: ["Orders"],
    }),
  }),
});
export const { useCreateOrderMutation, useGetOrderByEmailQuery } = ordersApi;
export default ordersApi;
