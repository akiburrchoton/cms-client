import React from "react";
import Navbar from "../Components/Common/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Common/Footer";

function MainLayout() {
  return (
    <div className="w-full flex flex-col justify-center mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;
