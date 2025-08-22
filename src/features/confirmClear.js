import { createSlice } from "@reduxjs/toolkit";

const confirmModalInitialState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "confirmModal",
  initialState: confirmModalInitialState,
  reducers: {
    showModal: (state) => {
      state.isOpen = true;
      document.body.classList.add("overflow-hidden");
    },
    closeModal: (state) => {
      state.isOpen = false;
      document.body.classList.remove("overflow-hidden");
    },
  },
});

export const { showModal, closeModal } = modalSlice.actions;
