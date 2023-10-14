import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import projectSlice from "./projectSlice";

const store = configureStore({
  reducer: {
    userSlice,
    projectSlice,
  },
});

export default store;
