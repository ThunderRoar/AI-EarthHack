import { configureStore } from '@reduxjs/toolkit';

import { evalApi } from './probSolve';

export const store = configureStore({
    reducer: {
        [evalApi.reducerPath]: evalApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(evalApi.middleware)
});