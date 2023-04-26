import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "@/lib/features/counter/counterSlice";
import todoSlice from "@/lib/features/todos/todoSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoSlice,
  },
});
