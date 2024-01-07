import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const openAiKey;

export const evalApi = createApi({
    reducerPath: 'evalApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://animechan.xyz/api/',
        // prepareHeaders: (headers) => {
        //     headers.set();
        //     headers.set();
        // }
    }),
    endpoints: (builder) => ({
        getResult: builder.query({
            query: (params) => `/random`
        })
    })
});


export const { useLazyGetResultQuery } = evalApi;