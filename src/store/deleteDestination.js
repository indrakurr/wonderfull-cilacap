import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIDestination } from "../apis/APIDestination";

export const fetchDeleteDestination = createAsyncThunk(
  "fetch/deleteDestination",
  APIDestination.deleteDestination
);

const initialState = {
  message: "",
  status: "idle",
  data: null,
};

const deleteDestinationSlice = createSlice({
  name: "destination",
  initialState,
  extraReducers: (builder) => {
    builder.addCase("fetch/deleteDestination/pending", (state) => {
      state.status = "loading";
      state.message = "";
    });
    builder.addCase("fetch/deleteDestination/fulfilled", (state, { payload }) => {
      state.status = "success";
      state.data = payload;
    });
    builder.addCase("fetch/deleteDestination/rejected", (state, { error }) => {
      state.status = "failed";
      state.data = error.stack;
    });
  },
});

export const selectDestination = (state) => state.destination;

export default deleteDestinationSlice.reducer;
