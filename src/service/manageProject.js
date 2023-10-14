import { https } from "./config";

export const manageProjectServ = {
  // GET
  getProjectCategory: () => {
    return https.get("/api/ProjectCategory");
  },

  // POST
  createProject: (data) => {
    return https.post("/api/Project/createProject", data);
  },
  createProjectAuthorize: (data) => {
    return https.post("/api/Project/createProjectAuthorize", data);
  },
};
