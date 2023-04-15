import { configureStore } from "@reduxjs/toolkit";

import quizReducer, { quizSlice } from "./quizReducer";
import answersHistoryReducer, { answersHistorySlice } from "./answersHistory";

const store = configureStore({
  reducer: {
    [quizSlice.name]: quizReducer,
    [answersHistorySlice.name]: answersHistoryReducer,
  },
});

export default store;
