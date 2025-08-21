import { NavLink } from "react-router-dom";
import { Cart } from "../icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((state) => state.phoneItems);
  return (
    <nav className="bg-emerald-500 p-5 flex items-center justify-between md:px-12 fixed w-full top-0 z-[10000]">
      <NavLink to="/" className="text-2xl font-bold text-slate-50">
        Logo
      </NavLink>
      <a href="#contact" className="capitalize text-slate-50 text-xl font-bold">
        contact us
      </a>
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
