import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    userId: null,
    id: null,
    title: null,
    completed: null,
  },
  reducers: {
    updateTodo: (state, action) => {
      const { userId, id, title, completed } = action.payload;
      state.userId = userId;
      state.id = id;
      state.title = title;
      state.completed = completed;
    },
  },
});

export const { updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
