import React from "react";
import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import NotFoundPage from "./pages/NotFoundPage";
import BaseLayout from "./shared/components/layouts/BaseLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index={true} element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HelmetProvider>
  );
};
export default App;
