import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "@/lib/features/counter/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
