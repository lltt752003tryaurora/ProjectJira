import { createSlice } from "@reduxjs/toolkit";
import { USER_LOGIN } from "../util/constant/settingSystem";

let dataUserLocal = "null";
if (USER_LOGIN) {
  dataUserLocal = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
  user: dataUserLocal,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDataUser: (state, action) => {
      console.log(action);
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDataUser } = userSlice.actions;

export default userSlice.reducer;
