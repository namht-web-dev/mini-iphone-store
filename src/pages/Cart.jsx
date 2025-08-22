import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import Title from "../components/Title";
import empty from "../assets/empty.svg";
import { showModal } from "../features/confirmClear";

const Cart = () => {
  const phoneItems = useSelector((state) => state.phoneItems);
  const dispatch = useDispatch();
  if (phoneItems.accessories.length < 1) {
    return (
      <div className="text-center flex flex-col items-center gap-5">
        <p className="text-2xl font-bold text-emerald-600">
          Your bag is currently empty
        </p>
        <img className="w-96" src={empty} alt="empty bag" />
      </div>
    );
  }
  return (
    <section>
      <div className="flex flex-col justify-center items-start mx-auto w-96">
        {phoneItems.accessories.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <button
        onClick={() => {
          dispatch(showModal());
        }}
        className="my-5 block text-center mx-auto rounded-md px-6 text-slate-50 font-bold py-1 bg-emerald-300 hover:bg-emerald-600 duration-300 cursor-pointer"
      >
        Clear
      </button>

      <Title text="Total" />
      <div className="w-full border-t border-slate-300">
        <p className="text-emerald-500 font-bold text-2xl px-3 text-center mt-3">
          {phoneItems.total.toFixed(2)} $
        </p>
      </div>
    </section>
  );
};
export default Cart;
