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
  name: "destinations",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDeleteDestination.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.data = payload;

      // Hapus destinasi yang dihapus dari state
      state.data = state.data.filter(
        (destination) => destination.id !== payload.id
      );
    });
    builder.addCase(fetchDeleteDestination.pending, (state) => {
      state.status = "loading";
      state.message = "";
    });
    builder.addCase(fetchDeleteDestination.rejected, (state, { error }) => {
      state.status = "failed";
      state.message = error.message;
    });
  },
});

export const selectDestinations = (state) => state.products;

export default deleteDestinationSlice.reducer;
