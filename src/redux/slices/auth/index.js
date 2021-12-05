import { createSlice } from "@reduxjs/toolkit";
import api from "@utils/axios";

const initialState = {
    isAuth: false,
    user: null
}

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser: (state) => {
            state.isAuth = true
        },
        logoutUser: (state) => {
            state.isAuth = false
        },
        getUserSuccess: (state, payload) => {
            state.user = payload
        }
    }
});

export const { loginUser, logoutUser, getUserSuccess } = slice.actions;

export const checkUser = dispatch => () => {
    api.get('/user')
    .then(({data}) => {
        dispatch(getUserSuccess(data))
    })
    .catch(error => {
        console.log(error)
    })
}

export default slice.reducer;
