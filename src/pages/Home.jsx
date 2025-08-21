import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col justify-between min-h-dvh relative">
      <Navbar />
      <Outlet />
      <Footer />
      <p className="text-center font-light text-xs absolute bottom-0 w-full text-slate-50 mb-2">
        Copyright {new Date().getFullYear()}
      </p>
    </div>
  );
};
export default Home;
