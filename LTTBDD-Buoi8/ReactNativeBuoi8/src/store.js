// store.js
import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./reducers/messageSlice";

const store = configureStore({
  reducer: {
    messages: messagesReducer,
  },
});

export default store;
