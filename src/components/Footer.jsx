import { Location, Phone } from "../icons";

const Footer = () => {
  return (
    <footer className="tracking-wider py-12 bg-emerald-700 px-10 font-bold text-slate-50 relative">
      <div className="flex gap-4">
        <Location /> <span>Address: 112, 48 street, Washington DC</span>
      </div>
      <div className="flex gap-4 mt-3">
        <Phone /> <span>Tel: 0984707504</span>
      </div>
    </footer>
  );
};
export default Footer;
