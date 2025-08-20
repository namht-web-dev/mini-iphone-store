import { Cart } from "../icons";

const Navbar = () => {
  return (
    <nav className="bg-emerald-500 p-5 flex items-center justify-between md:px-12">
      <span className="text-2xl font-bold text-slate-50">Logo</span>
      <div className="text-slate-50 relative">
        <Cart />
        <span className="absolute top-[-8px] right-[-5px] bg-amber-600 px-2 font-bold rounded-2xl">
          4
        </span>
      </div>
    </nav>
  );
};
export default Navbar;
