import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth"
import carDetailsReducer from "./carDetailsSlice"
import languageReducer from "./languageSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        carDetail: carDetailsReducer,
        language: languageReducer
    }
})

export default store