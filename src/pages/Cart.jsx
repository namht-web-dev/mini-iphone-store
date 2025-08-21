import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import Title from "../components/Title";
import empty from "../assets/empty.svg";

const Cart = () => {
  const phoneItems = useSelector((state) => state.phoneItems);
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
      {phoneItems.accessories.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <Title text="Total" />
      <div className="w-full border-t border-slate-300 mx-5">
        <p className="p text-emerald-500 font-bold text-2xl">
          {phoneItems.total.toFixed(2)}
        </p>
      </div>
    </section>
  );
};
export default Cart;
