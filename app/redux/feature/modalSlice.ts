import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataType } from "@/utils/types/DataType";

interface ModalState {
  isVisible: boolean;
  recipe: DataType | null;
}

const initialState: ModalState = {
  isVisible: false,
  recipe: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<any>) => {
      state.isVisible = true;
      state.recipe = action.payload;
    },
    closeModal: (state) => {
      state.isVisible = false;
      state.recipe = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
