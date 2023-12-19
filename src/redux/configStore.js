import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import projectSlice from "./projectSlice";
import drawerSlice from "./drawerSlice";

const store = configureStore({
  reducer: {
    userSlice,
    projectSlice,
    drawerSlice,
  },
  devTools: true
});

export default store;
