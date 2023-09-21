import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const login = createAsyncThunk("login/loginUser", (data) => {
    return axios.post(`${process.env.REACT_APP_API_URL}login`, data)
    .then(res => res.data)
})

const initialAuthState = {
    loading: false,
    error: "",
    isAuth: localStorage.getItem('isAuth'),
    phone: localStorage.getItem('phone'),
    token: localStorage.getItem('token')
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        logout(steat) {
            steat.isAuth = false;
            steat.phone = null;
            steat.token = null;
            localStorage.clear();
        },
    },
    extraReducers: builder => {
        builder.addCase(login.pending, (state) => {
            state.loading = true
            state.isAuth = false
            state.error = ""
            state.phone = null
            state.token = null
        })
        builder.addCase(login.fulfilled, (state, action) => {
            if(action.payload.status){
                console.log(action.payload)
                state.loading = false
                state.isAuth = true
                state.phone = action.payload.message
                state.token = action.payload.token
                state.error = ""
                localStorage.setItem('isAuth', true);
                localStorage.setItem('phone', action.payload.message);
                localStorage.setItem('token', action.payload.token);
            }
            else{
                state.loading = false
                state.error = action.payload.message
                state.isAuth = false
                state.token = null
                state.phone = null
            }
        })
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false
            state.error = "Login Faild"
            state.isAuth = false
            state.token = null
            state.phone = null
        })
    }
});

export const authAction = authSlice.actions;
export default authSlice.reducer;