import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {
    username: "",
    userId: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    connect: (state, action) => {
      state.user = {
        username: action.payload.username,
        userId: action.payload.userId,
      };
    },
    disconnect: (state, action) => {
      state.user = {
        username: "",
        userId: "",
      };
    },
  },
});

export default userSlice.reducer;
export const { connect, disconnect } = userSlice.actions;
