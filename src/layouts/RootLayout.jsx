import React from "react";
import Navbar from "../pages/Shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer";

const RootLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;
