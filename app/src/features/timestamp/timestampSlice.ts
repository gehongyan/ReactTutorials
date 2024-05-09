import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTimestamp } from "./timestampAPI.ts";
import { RootState } from "../../app/store.ts";

export interface TimestampState {
  cloudTimestamp?: number;
}

const initialState: TimestampState = {
  cloudTimestamp: undefined,
};

export const getTimestampAsync = createAsyncThunk(
  "timestamp/getTimestamp",
  async () => {
    return await getTimestamp();
  }
);

export const timestampSlice = createSlice({
  name: "timestamp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTimestampAsync.pending, (state) => {
        state.cloudTimestamp = undefined;
      })
      .addCase(getTimestampAsync.fulfilled, (state, action) => {
        state.cloudTimestamp = action.payload;
      });
  },
});

export const selectTimestamp = (state: RootState) => state.timestamp;

export default timestampSlice.reducer
