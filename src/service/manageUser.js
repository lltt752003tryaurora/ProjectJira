import { ADD_MEMBER_PROJECT, DEL_MEMBER_PROJECT, GET_USER, SIGN_IN, SIGN_UP } from "../util/constant/settingSystem";
import { https } from "./config";

export const manageUserServ = {
  // sign in
  signin: (data) => {
    return https.post(SIGN_IN, data);
  },
  // sign up
  signup: (data) => {
    return https.post(SIGN_UP, data);
  },
  // get user
  getUser: (idProject) => {
    return https.get(GET_USER + idProject);
  },
  // add member in project 
  addMemberInProject: (userProject) => {
    return https.post(ADD_MEMBER_PROJECT, userProject);
  },
  // delete member in project
  deleteMemberInProject: (userProject) => {
    return https.post(DEL_MEMBER_PROJECT, userProject);
  }
};
