import React from "react";
import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import HomePage from "./pages/HomePage";
import BaseLayout from "./shared/components/layouts/BaseLayout";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index={true} element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HelmetProvider>
  );
};
export default App;
