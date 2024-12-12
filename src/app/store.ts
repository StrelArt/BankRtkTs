import {configureStore} from "@reduxjs/toolkit";
import balance   from "../features/account/balanceSlice.ts";
import quote from "../features/quote/quoteSlice.ts";

export const store = configureStore({
    reducer: {
        balance, quote
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch