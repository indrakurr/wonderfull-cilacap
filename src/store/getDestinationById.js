    import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
    import { APIDestination } from "../apis/APIDestination";

    export const fetchGetDestinationById = createAsyncThunk(
      "fetch/getDestination",
      APIDestination.getDestinationById
    );

    const initialState = {
      message: "",
      status: "idle",
      data: null,
    };

    const DestinationsSlice = createSlice({
      name: "destinations",
      initialState,
      extraReducers: (builder) => {
        builder.addCase("fetch/getDestination/pending", (state) => {
          state.status = "loading";
          state.message = "";
        });

        builder.addCase("fetch/getDestination/fulfilled", (state, { payload }) => {
          state.status = "success";
          state.data = payload;
        });

        builder.addCase("fetch/getDestination/rejected", (state, { error }) => {
          state.status = "failed";
          state.message = error.stack;
        });
      },
    });

    export const selectDestination = (state) => state.destination;

    export default DestinationsSlice.reducer;
