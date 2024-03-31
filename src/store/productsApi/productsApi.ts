import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ProductI } from '../../types';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://mypymypy.github.io/vkui-cart-and-order/',
  }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query<ProductI[], void>({
      query: () => ({
        url: 'products.json',
        method: 'GET',
      }),
      providesTags: ['Products'],
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
