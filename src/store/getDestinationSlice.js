import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIDestination } from "../apis/APIDestination";

export const fetchGetDestinations = createAsyncThunk(
  "fetch/getDestinations",
  APIDestination.getDestination
);

const initialState = {
  message: "",
  status: "idle",
  data: null,
};

const destinationsSlice = createSlice({
  name: "destinations",
  initialState,
  extraReducers: (builder) => {
    builder.addCase("fetch/getDestinations/pending", (state) => {
      state.status = "loading";
      state.message = "";
    });
    builder.addCase("fetch/getDestinations/fulfilled", (state, { payload }) => {
      state.status = "success";
      state.data = payload;
    });
    builder.addCase("fetch/getDestinations/rejected", (state, { error }) => {
      state.status = "failed";
      state.data = error.stack;
    });
  },
});

export const selectDestinations = (state) => state.destinations;

export default destinationsSlice.reducer;
