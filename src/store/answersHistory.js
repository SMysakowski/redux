import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const answersHistorySlice = createSlice({
  name: "answersHistory",
  initialState,
  reducers: {
    addAnswer: (state, action) => {
      const newAnswer = {
        id: Date.now(),
        ...action.payload,
      };
      state.push(newAnswer);
    },
  },
});

export const { addAnswer } = answersHistorySlice.actions;
export default answersHistorySlice.reducer;
