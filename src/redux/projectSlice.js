import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { manageProjectServ } from "../service/manageProject";

const initialState = {
  arrCategories: [],
};

export const getProjectCategoryAPI = createAsyncThunk(
  "project/getProjectCategoryAPI",
  async () => {
    const res = await manageProjectServ.getProjectCategory();
    // console.log(res);
    return res.data.content;
  }
);

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  // take all data in arrCategories -> use extraReducers
  extraReducers: (builder) => {
    builder.addCase(getProjectCategoryAPI.fulfilled, (state, action) => {
      // console.log(action);
      state.arrCategories = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = projectSlice.actions;

export default projectSlice.reducer;
