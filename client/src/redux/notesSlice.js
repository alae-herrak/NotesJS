import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  notes: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState: initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes = [action.payload, ...state.notes];
    },
    resetNotes: (state, action) => {
      state.notes = [];
    },
  },
});

export default notesSlice.reducer;
export const { addNote, resetNotes } = notesSlice.actions;
