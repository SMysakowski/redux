import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Quiz 1",
    questions: [
      {
        id: 1,
        question: "Question 1",
        answers: [
          {
            id: 1,
            answer: "Answer 1",
            correct: true,
          },
          {
            id: 2,
            answer: "Answer 2",
            correct: false,
          },
          {
            id: 3,
            answer: "Answer 3",
            correct: false,
          },
        ],
      },
      {
        id: 1,
        question: "Question 2",
        answers: [
          {
            id: 1,
            answer: "Answer 1",
            correct: false,
          },
          {
            id: 2,
            answer: "Answer 2",
            correct: true,
          },
          {
            id: 3,
            answer: "Answer 3",
            correct: false,
          },
        ],
      },
    ],
  },
];

export const quizSlice = createSlice({
  name: "quizes",
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      throw new Error("Not implemented");
    },
    addQuestion: (state, action) => {
      throw new Error("Not implemented");
    },
    addAnswer: (state, action) => {
      throw new Error("Not implemented");
    },
  },
});

export const { addAnswer, addQuestion, addQuiz } = quizSlice.actions;
export default quizSlice.reducer;

export const selectQuizes = (state) => state.quizes;

export const selectQuizById = (state, quizId) =>
  state.quizes.find((quiz) => quiz.id === quizId);

export const selectQuestionsByQuizId = (state, quizId) =>
  state.quizes.find((quiz) => quiz.id === quizId).questions;
