import { NavLink } from "react-router-dom";
import { Cart } from "../icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((state) => state.phoneItems);
  return (
    <nav className="bg-emerald-500 p-5 flex items-center justify-between md:px-12">
      <NavLink to="/" className="text-2xl font-bold text-slate-50">
        Logo
      </NavLink>
      <NavLink to="cart" className="text-slate-50 relative">
        <Cart />
        <span className="absolute top-[-8px] right-[-5px] bg-amber-600 px-2 font-bold rounded-2xl">
          {amount}
        </span>
      </NavLink>
    </nav>
  );
};
export default Navbar;
