import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface InitialAuthType {
    token: string
}

const initialState: InitialAuthType = {
    token: localStorage.getItem('token') as string || ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
            localStorage.setItem('token', action.payload)
        }
    }
})

export const { setToken } = authSlice.actions
export default authSlice.reducer