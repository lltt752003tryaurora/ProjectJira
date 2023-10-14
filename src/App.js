// react-router-dom
import { Routes, Route } from "react-router-dom";
import UserTemplate from "./template/HomeTemplate/UserTemplate";
import Home from "./page/Home/Home";
import Login from "./page/User/Login/Login";
import SignUp from "./page/User/SignUp/SignUp";
import Error from "./page/Error/Error";
import CreateProject from "./page/Home/CreateProject/CreateProject";
import BoardProject from "./page/Home/BoardProject/BoardProject";
import LandingTemplate from "./template/LandingTemplate/LandingTemplate";
import LandingPage from "./page/LandingPage/LandingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingTemplate />}>
          <Route index element={<LandingPage />} />
        </Route>
        <Route path="" element={<UserTemplate />}>
          <Route path="manage-project" element={<Home />}>
            <Route path="board-project" element={<BoardProject />} />
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
