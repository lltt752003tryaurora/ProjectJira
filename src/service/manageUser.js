import { https } from "./config";

export const manageUserServ = {
  signin: (data) => {
    return https.post("/api/Users/signin", data);
  },
  signup: (data) => {
    return https.post("/api/Users/signup", data);
  },
};
