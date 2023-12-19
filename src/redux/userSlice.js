import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USER_LOGIN } from "../util/constant/settingSystem";
import { manageUserServ } from "../service/manageUser";

let dataUserLocal = "null";
if (USER_LOGIN) {
  dataUserLocal = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
  user: dataUserLocal,
  userSearch: [],
};

export const getUserSearchAPI = createAsyncThunk(
  "user/getUserSearchAPI",
  async (idProject) => {
    const res = await manageUserServ.getUser(idProject)
    return res.data.content;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDataUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserSearchAPI.fulfilled, (state, action) => {
      state.userSearch = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setDataUser } = userSlice.actions;

export default userSlice.reducer;
