import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './feature/modalSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});
