import { Link } from "react-router-dom";
import notfound from "../assets/notfound.svg";

const NotFound = () => {
  return (
    <div className="grid place-items-center mt-20 gap-4">
      <h1 className="capitalize text-emerald-500 font-bold text-3xl">
        page not found
      </h1>
      <Link
        to="/"
        className="capitalize text-emerald-500 text-xl font-semibold hover:text-emerald-700 duration-300"
      >
        back to home
      </Link>
      <img className="w-3/4 lg:w-1/2" src={notfound} alt="not-found" />
    </div>
  );
};
export default NotFound;
