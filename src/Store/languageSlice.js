import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
    lng: Cookies.get("i18next") || "en"
}

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        changeLanguage(state, action) {
            state.lng = action.payload
        }
    }
})
export const languageAction = languageSlice.actions

export default languageSlice.reducer