import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./redux/userSlice";
import notesSlice from "./redux/notesSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    notes: notesSlice,
  },
});
