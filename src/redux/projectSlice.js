import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { manageProjectServ } from "../service/manageProject";

const initialState = {
  arrCategories: [],
  arrAllProjects: [],
  projectEdit: {
    "id": 0,
    "projectName": "string",
    "creator": 0,
    "description": "string",
    "categoryId": "string"
  }
};

export const getProjectCategoryAPI = createAsyncThunk(
  "project/getProjectCategoryAPI",
  async () => {
    const res = await manageProjectServ.getProjectCategory();
    return res.data.content;
  }
);

export const getAllProjectAPI = createAsyncThunk(
  "project/getAllProjectAPI",
  async () => {
    const res = await manageProjectServ.getAllProject();
    return res.data.content;
  }
);

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setNullArrAllProjects: (state, action) => {
      state.arrAllProjects = []
    },
    editArrProjects: (state, action) => {
      state.projectEdit = action.payload;
    }
  },
  // take all data in arrCategories -> use extraReducers
  extraReducers: (builder) => {
    builder.addCase(getProjectCategoryAPI.fulfilled, (state, action) => {
      state.arrCategories = action.payload;
    }).addCase(getAllProjectAPI.fulfilled, (state, action) => {
      state.arrAllProjects = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setNullArrAllProjects, editArrProjects } = projectSlice.actions;

export default projectSlice.reducer;
