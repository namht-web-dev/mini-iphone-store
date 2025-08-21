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
    increaseItem: (state, action) => {
      const itemId = action.payload.id;
      const item = state.accessories.find((item) => item.id === itemId);
      item.count += 1;
      state.amount += 1;
      state.total += item.price;
    },
    decreaseItem: (state, action) => {
      const itemId = action.payload.id;
      const item = state.accessories.find((item) => item.id === itemId);
      item.count -= 1;
      state.total -= item.price;
      state.amount -= 1;
    },
    removeItem: (state, action) => {
      const itemId = action.payload.id;
      const itemIndex = state.accessories.findIndex(
        (item) => item.id === itemId
      );

      state.amount -= state.accessories[itemIndex].count;
      state.accessories.splice(itemIndex, 1);
    },
  },
});

export const { addToCart, increaseItem, decreaseItem, removeItem } =
  phoneItemsSlice.actions;
