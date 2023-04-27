import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    updateTodos: (state, action) => {
      state.push(...action.payload);
    },
  },
});

export const { updateTodos } = todosSlice.actions;

export default todosSlice.reducer;
