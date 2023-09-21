import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  carDetail: {},
  error: ""
}


const fetchCarDetails = createAsyncThunk("carDeatils/fetchData", () => {
  return axios.get(`${process.env.REACT_APP_API_URL}car_details/1`)
  .then(res => {
    return res.data.data
  })
})

const carDetailsSlice = createSlice({
  name: "carDetail",
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchCarDetails.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchCarDetails.fulfilled, (state, action) => {
      state.loading = false
      state.carDetail = action.payload
      state.error = ""
    })
    builder.addCase(fetchCarDetails.rejected, (state, action) => {
      state.loading = false
      state.carDetail = {}
      state.error = "Network error"
    })
  }
  })

  export default carDetailsSlice.reducer
  export { fetchCarDetails };
