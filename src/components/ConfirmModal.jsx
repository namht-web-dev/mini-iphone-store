import { useDispatch } from "react-redux";
import { Warning } from "../icons";
import { clearAllItems } from "../features/cartSlice";
import { closeModal } from "../features/confirmClear";

const ConfirmModal = () => {
  const dispatch = useDispatch();
  return (
    <div className="grid place-items-center w-full h-dvh fixed top-0 left-0 z-[1000]">
      <div className="fixed bg-slate-200 w-full min-h-dvh h-full opacity-70"></div>

      <div className="p-10 bg-slate-50 border border-emerald-400 rounded-xl z-[10000]">
        <h2 className="font-bold flex text-amber-700 gap-3 tracking-wider">
          <Warning /> Do you wanna clear all items in your bag?
        </h2>
        <div className="flex gap-12 justify-center p-5">
          <button
            onClick={() => {
              dispatch(clearAllItems());
              dispatch(closeModal());
            }}
            type="button"
            className="bg-emerald-400 hover:bg-emerald-500 duration-300 px-6 py-2 cursor-pointer rounded-md"
          >
            Confirm
          </button>
          <button
            onClick={() => dispatch(closeModal())}
            type="button"
            className="bg-pink-400 hover:bg-pink-500 duration-300 px-6 py-2 cursor-pointer rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default ConfirmModal;
