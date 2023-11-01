import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIDestination } from "../apis/APIDestination";

// Async thunk for updating a destination
export const fetchUpdateDestination = createAsyncThunk(
  "destination/update",
  async (payload) => {
    try {
      const updatedData = await APIDestination.updateDestination(
        payload.id,
        payload.data
      );
      return updatedData;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  message: "",
  status: "idle",
  data: null,
};

const updateDestinationSlice = createSlice({
  name: "updateDestination",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUpdateDestination.pending, (state) => {
      state.status = "loading";
      state.message = "";
    });
    builder.addCase(fetchUpdateDestination.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.data = payload;
      state.message = "Destination updated successfully";
    });
    builder.addCase(fetchUpdateDestination.rejected, (state, { error }) => {
      state.status = "failed";
      state.data = error.stack;
      state.message = "Destination update failed";
    });
  },
});

export const selectUpdateDestination = (state) => state.updateDestination;

export default updateDestinationSlice.reducer;
