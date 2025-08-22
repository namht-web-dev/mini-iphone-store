import { configureStore } from "@reduxjs/toolkit";
import { phoneItemsSlice } from "./cartSlice";
import { modalSlice } from "./confirmClear";

export const store = configureStore({
  reducer: {
    phoneItems: phoneItemsSlice.reducer,
    confirmModal: modalSlice.reducer,
  },
});
