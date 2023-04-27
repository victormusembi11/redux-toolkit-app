import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "@/lib/features/counter/counterSlice";
import todoSlice from "@/lib/features/todos/todoSlice";
import todosSlice from "../features/todos/todosSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoSlice,
    todos: todosSlice,
  },
});
