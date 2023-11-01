import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIDestination } from "../apis/APIDestination";

export const fetchPostDestination = createAsyncThunk(
  "fetch/postDestination",
  APIDestination.postDestination
);

const initialState = {
  message: "",
  status: "idle",
  data: null,
};

const createDestinationSlice = createSlice({
  name: "destination",
  initialState,
  extraReducers: (builder) => {
    builder.addCase("fetch/postDestination/pending", (state) => {
      state.status = "loading";
      state.message = "";
    });
    builder.addCase("fetch/postDestination/fulfilled", (state, { payload }) => {
      state.status = "success";
      state.data = { ...state.data, payload };
    });
    builder.addCase("fetch/postDestination/rejected", (state, { error }) => {
      state.status = "failed";
      state.data = error.stack;
    });
  },
});

export const selectDestination = (state) => state.destination;

export default createDestinationSlice.reducer;
