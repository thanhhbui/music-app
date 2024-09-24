import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    user: any | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
};

// export const Login = createSlice(
    
// )