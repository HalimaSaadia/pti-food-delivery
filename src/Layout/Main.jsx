
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const Main = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
