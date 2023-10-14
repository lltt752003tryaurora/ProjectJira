import Header from "../../components/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const LandingTemplate = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LandingTemplate;
