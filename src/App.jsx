import { Route, Routes } from "react-router-dom";
import Navbar from "./shared/components/layouts/Navbar";
import Footer from "./shared/components/layouts/Footer";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/About" element={<About />} />
         <Route path="/Contacts" element={<Contacts />} />
         <Route path="/Location" element={<Location />} />
         <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
};
export default App;
