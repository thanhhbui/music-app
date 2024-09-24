import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    user: {
        email: string
    } | null;
    error: string;
}

const initialState: UserState = {
    user: null,
    error: ""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ email: string }>) => {
            state.user = action.payload;
        }, 
        clearUser: (state) => {
            state.user = null;
        }
    }
})

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;