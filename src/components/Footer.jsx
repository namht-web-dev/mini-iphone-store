import { Location, Phone, Www } from "../icons";

const Footer = () => {
  return (
    <footer className="tracking-wider mt-12 py-12 bg-emerald-700 px-10 font-bold text-slate-50 flex flex-col gap-1">
      <div className="flex gap-4">
        <Location /> <span>Address: 112, 48 street, Washington DC</span>
      </div>
      <div className="flex gap-4 mt-3">
        <Phone /> <span>Tel: 0984707504</span>
      </div>
      <a href="https:google.com.vn" className="flex gap-4 mt-3">
        <Www /> <span>Website: https:google.com.vn</span>
      </a>
    </footer>
  );
};
export default Footer;
