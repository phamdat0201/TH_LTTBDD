import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
  name: "messages",
  initialState: { data: [] },
  reducers: {
    addMessage: (state, action) => {
      state.data.push(action.payload);
    },
    updateMessage: (state, action) => {
      const { id, content } = action.payload;
      const message = state.data.find((msg) => msg.id === id);
      if (message) {
        message.content = content;
      }
    },
    deleteMessage: (state, action) => {
      const id = action.payload;
      state.data = state.data.filter((msg) => msg.id !== id);
    },
  },
});

export const { addMessage, updateMessage, deleteMessage } =
  messagesSlice.actions;
export default messagesSlice.reducer;
