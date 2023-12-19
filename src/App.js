// react-router-dom
import { Routes, Route, Navigate } from "react-router-dom";
import UserTemplate from "./template/HomeTemplate/UserTemplate";
import Home from "./page/Home/Home";
import Login from "./page/User/Login/Login";
import SignUp from "./page/User/SignUp/SignUp";
import Error from "./page/Error/Error";
import LandingPage from "./page/Home/LandingPage/LandingPage";
import CreateProject from "./page/Home/Project/CreateProject";
import ProjectManagement from "./page/Home/Management/ProjectManagement";
import ProjectDetail from "./page/Home/Project/ProjectDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/manage-project/landing-page" />} />
        <Route path="/" element={<UserTemplate />}>
          <Route path="manage-project" element={<Home />}>
            <Route path="landing-page" element={<LandingPage />} />
            <Route path="project-manage" element={<ProjectManagement />} />
            <Route path="project-detail/:projectId" element={<ProjectDetail />} />
            <Route path="project-detail" element={<ProjectDetail />} />
            <Route path="create-project" element={<CreateProject />} />
          </Route>
        </Route>

        <Route path="sign-in" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="error" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
