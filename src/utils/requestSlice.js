import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    addRequests: (state, action) => {
      action.payload;
    },
    // removeRequest: () => {
    //     return nu
    // }
  },
});

export const { addRequests } = requestSlice.actions;

export default requestSlice.reducer;
