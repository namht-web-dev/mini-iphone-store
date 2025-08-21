import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const Iphone = ({ id, thumbnail, title, price }) => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={() => {
        dispatch(addToCart({ id, thumbnail, name: title, price }));
      }}
      className="cursor-pointer shadow-xl rounded-xl hover:shadow-md duration-300 hover:translate-y-[-3px] border-t border-t-slate-200"
    >
      <img src={thumbnail} alt={title} />
      <div className="py-2 px-4 border-t border-t-slate-300 mx-2 text-left">
        <h2 className="tracking-wider font-bold text-emerald-500">{title}</h2>
        <p className="text-emerald-500 tracking-wide">{price}$</p>
      </div>
    </button>
  );
};
export default Iphone;
