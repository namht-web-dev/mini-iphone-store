import { configureStore } from "@reduxjs/toolkit";
import { phoneItemsSlice } from "./cartSlice";

export const store = configureStore({
  reducer: {
    phoneItems: phoneItemsSlice.reducer,
  },
});
