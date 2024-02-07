import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../features/cartSlices";
import AuthReducer from "../features/authSlice";

export const store = configureStore({
    reducer: {
        certRoot: CartReducer,
        authRoot: AuthReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch