import React from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Footer from "./Footer";
import Navbar from "./Navbar";

export default function BaseLayout() {
  return (
    <>
      <Helmet>
        <title>Shifting App</title>
      </Helmet>
      <Navbar />

      <div>
        <main className="relative flex flex-col min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
