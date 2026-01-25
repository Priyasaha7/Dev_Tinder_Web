import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: [], // ✅ use array, not null
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    removeUserFromFeed: () => {
      return [];
    },
  },
});

export const { addFeed, removeUserFromFeed } = feedSlice.actions;
export default feedSlice.reducer;
