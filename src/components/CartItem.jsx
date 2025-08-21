import { useDispatch, useSelector } from "react-redux";
import { Minus, Plus } from "../icons";
import { decreaseItem, increaseItem, removeItem } from "../features/cartSlice";

const CartItem = ({ id, image, name, price, count }) => {
  const { accessories } = useSelector((state) => state.phoneItems);
  const dispatch = useDispatch();
  return (
    <article className="p-5 flex">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              const item = accessories.find((item) => item.id === id);
              item.count === 1
                ? dispatch(removeItem({ id }))
                : dispatch(decreaseItem({ id }));
            }}
            className=" mt-[-1.5rem] cursor-pointer text-emerald-700 rounded-2xl"
          >
            <Minus />
          </button>
          <div>
            <img
              className="w-16 h-20 border border-slate-200 rounded-md"
              src={image}
              alt={name}
            />
            <p className="text-center">{count}</p>
          </div>
          <button
            type="button"
            onClick={() => dispatch(increaseItem({ id }))}
            className="cursor-pointer mt-[-1.5rem] text-emerald-500 rounded-2xl"
          >
            <Plus />
          </button>
          <div className="mt-[-1.5rem]">
            <p className="text-xs p-2 text-emerald-500 font-bold tracking-wide">
              {name}
            </p>
            <p className="px-2 font-bold text-emerald-700 text-xs tracking-wide">
              {price}$
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
export default CartItem;
