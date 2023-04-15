// example of action
const addTodoAction = {
  // type: 'domain/eventName'
  type: "todos/todoAdded",
  payload: {
    id: "1",
    text: "Buy milk",
  },
};

// z palca uruchomienie akcji
store.dispatch({
  type: "todos/todoAdded",
  payload: {},
});

// Action creators
const AddTodo = (text) => {
  // execute some custom logic here
  return {
    type: "todos/todoAdded",
    payload: {
      id: "1",
      text,
    },
  };
};

store.dispatch(AddTodoAction("Buy milk"));

const removeTodoAction = {
  type: "todos/todoRemoved",
  payload: "1",
};

const editTodoAction = {
  type: "todos/todoEdited",
  payload: {
    id: "1",
    text: "Buy milk and eggs",
  },
};

// reducer

const counterIncrementedAction = {
  type: "counter/incremented",
};

const counterDecrementedAction = {
  type: "counter/decremented",
};

const counterResetAction = {
  type: "counter/reset",
};

const counterSetAction = {
  type: "counter/set",
  payload: 10,
};

const initialState = { value: 0 };

function CounterReducer(state = initialState, action) {
  switch (action.type) {
    case "counter/incremented": {
      // custom logic
      return {
        ...state,
        value: state.value + 1,
      };
    }
    case "counter/decremented": {
      return {
        ...state,
        value: state.value - 1,
      };
    }
    case "counter/reset": {
      return {
        ...state,
        value: 0,
      };
    }
    case "counter/set": {
      return {
        ...state,
        value: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  counter: counterReducer,
});

console.log(store.getState()); //

const selectCounterValue = (state) => state.counter.value;

const currentValue = selectCounterValue(store.getState());
