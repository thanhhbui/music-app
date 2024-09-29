import { faYelp } from "@fortawesome/free-brands-svg-icons";

export const SET_USER = "SET_USER";
export const SIGN_OUT = "SIGN_OUT";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_SUCCESS = "SET_SUCCESS";
export const NEED_VERIFICATION = "NEED_VERIFICATION";

export interface user {
    username: string,
    email: string,
    id: string,
    createdAt: any
}

export interface authState {
    user: user,
    authenticated: boolean,
    loading: boolean,
    error: string,
    needVerification: boolean,
    success: string
}

export interface signUpData {
    username: string,
    email: string,
    password: string
}

export interface signInData {
    username: string,
    password: string
}

//actions

interface setUserAction {
    type: typeof SET_USER,
    payload: user
}

interface signOutAction {
    type: typeof SIGN_OUT,
}

interface setLoadingAction {
    type: typeof SET_LOADING,
    payload: boolean
}

interface setErrorAction {
    type: typeof SET_ERROR,
    payload: string
}

interface needVerificationAction {
    type: typeof NEED_VERIFICATION,
}

interface setSuccessAction {
    type: typeof SET_SUCCESS,
    payload: string
}

export type authAction = setUserAction | signOutAction | setLoadingAction | setErrorAction | needVerificationAction | setSuccessAction;