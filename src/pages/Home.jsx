import Footer from "../components/Footer";
import IphoneList from "../components/IphoneList";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <IphoneList />
      <Footer />
      <p className="text-center font-light text-xs absolute bottom-0 w-full text-slate-50 mb-2">
        Copyright {new Date().getFullYear()}
      </p>
    </div>
  );
};
export default Home;
