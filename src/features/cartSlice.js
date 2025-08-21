import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  accessories: [],
  amount: 0,
  total: 0,
  isLoading: false,
};

export const phoneItemsSlice = createSlice({
  name: "phoneItems",
  initialState: cartInitialState,
  reducers: {
    addToCart: (state, action) => {
      const price = action.payload.price;
      state.amount += 1;
      state.total += price;
      const itemId = action.payload.id;
      const item = state.accessories.find((item) => item.id === itemId);
      if (item) {
        item.count += 1;
        return;
      }
      const newItem = {
        id: itemId,
        name: action.payload.name,
        count: 1,
        price: action.payload.price,
        image: action.payload.thumbnail,
      };
      state.accessories.push(newItem);
    },
  },
});

export const { addToCart } = phoneItemsSlice.actions;
