import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const openAiKey;

export const evalApi = createApi({
    reducerPath: 'evalApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/v1/',
        // prepareHeaders: (headers) => {
        //     headers.set();
        // }
    }),
    endpoints: (builder) => ({
        getResult: builder.query({
            query: (params) => `/${encodeURIComponent(params.statement)}`
        })
    })
});


export const { useLazyGetResultQuery } = evalApi;